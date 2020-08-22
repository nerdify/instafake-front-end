import {extractFiles} from 'extract-files'
import set from 'lodash.set'

export const forceFetch = (cacheConfig) => !!(cacheConfig && cacheConfig.force)
export const isMutation = (operation) => operation.operationKind === `mutation`
export const isQuery = (operation) => operation.operationKind === `query`

export function handleData(response) {
  const contentType = response.headers.get(`content-type`)

  if (contentType && contentType.indexOf(`application/json`) !== -1) {
    return response.json()
  }

  return response.text()
}

function getRequestBodyWithUploadables(operation, variables, uploadables) {
  const formData = new FormData()
  const {files} = extractFiles(uploadables, `variables.input`)
  const map = {}
  const operations = {
    query: operation.text,
    variables: {...variables, input: {...variables.input}},
  }

  Array.from(files).forEach(([file, paths], index) => {
    formData.append(index, file)

    map[index] = paths

    paths.forEach((path) => {
      set(operations, path, null)
    })
  })

  formData.append(`map`, JSON.stringify(map))
  formData.append(`operations`, JSON.stringify(operations))

  return formData
}

function getRequestBodyWithoutUplodables(operation, variables) {
  return JSON.stringify({
    query: operation.text,
    variables,
  })
}

export function getRequestBody(operation, variables, uploadables) {
  if (uploadables) {
    return getRequestBodyWithUploadables(operation, variables, uploadables)
  }

  return getRequestBodyWithoutUplodables(operation, variables)
}

export function getHeaders(uploadables) {
  if (uploadables) {
    return {
      Accept: `*/*`,
    }
  }

  return {
    Accept: `application/json`,
    'Content-type': `application/json`,
  }
}

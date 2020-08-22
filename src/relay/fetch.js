import {getHeaders, getRequestBody, handleData} from './helpers'

const {endpoints, user, admin} = window.env

export default async function _fetch(
  operation,
  variables,
  cacheConfig,
  uploadables
) {
  const body = getRequestBody(operation, variables, uploadables)
  const headers = {
    ...getHeaders(uploadables),
    Authorization: user
      ? `Bearer ${user.sanctum_api_token}`
      : admin && `Bearer ${admin.api_token}`,
  }

  const response = await fetch(endpoints.graphql, {
    body,
    headers,
    method: `POST`,
  })

  return handleData(response)
}

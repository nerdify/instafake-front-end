import {QueryResponseCache} from 'relay-runtime'

import {forceFetch, isMutation, isQuery} from './helpers'
import fetch from './fetch'

const fiveMinute = 300 * 1000
const cache = new QueryResponseCache({size: 250, ttl: fiveMinute})

export default async function fetchFunction(
  operation,
  variables,
  cacheConfig,
  uploadables
) {
  const queryID = operation.text

  // Try to get data from cache on queries
  const fromCache = cache.get(queryID, variables)

  if (isQuery(operation) && fromCache !== null && !forceFetch(cacheConfig)) {
    return fromCache
  }

  const response = await fetch(operation, variables, cacheConfig, uploadables)

  // Update cache on queries
  if (isQuery(operation) && response) {
    cache.set(queryID, variables, response)
  }

  // Clear cache on mutations
  if (isMutation(operation)) {
    cache.clear()
  }

  return response
}

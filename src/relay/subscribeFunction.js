import {Observable} from 'relay-runtime'

import fetch from './fetch'
import createPusherClient from './pusherClient'

const pusherClient = createPusherClient()

export default function subscribeFn(operation, variables, cacheConfig) {
  let channelName

  return Observable.create((sink) => {
    fetch(operation, variables, cacheConfig).then((json) => {
      channelName =
        json.extensions?.lighthouse_subscriptions?.channels?.[operation.name]

      if (!channelName) {
        return
      }

      const channel = pusherClient.subscribe(channelName)

      channel.bind(`lighthouse-subscription`, (payload) => {
        const result = payload.result

        if (result && result.errors) {
          sink.error(result.errors)
        } else if (result) {
          sink.next({
            data: result.data,
          })
        }

        if (!payload.more) {
          sink.complete()
        }
      })
    })
  }).finally(() => {
    pusherClient.unsubscribe(channelName)
  })
}

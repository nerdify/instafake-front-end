import Pusher from 'pusher-js'

export default function createPusherClient() {
  return new Pusher(process.env.REACT_APP_PUSHER_APP_KEY, {
    authEndpoint: `${process.env.REACT_APP_GRAPHQL_ENDPOINT}/subscriptions/auth`,
    cluster: `mt1`,
    auth: {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GRAPHQL_TOKEN}`,
      },
    },
  })
}

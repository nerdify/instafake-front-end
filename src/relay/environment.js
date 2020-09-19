import {Environment, Network, RecordSource, Store} from 'relay-runtime'

import fetchFunction from './fetchFunction'
import subscribeFunction from './subscribeFunction'

export default new Environment({
  network: Network.create(fetchFunction, subscribeFunction),
  store: new Store(new RecordSource()),
})

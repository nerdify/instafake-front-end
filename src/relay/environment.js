import {Environment, Network, RecordSource, Store} from 'relay-runtime'

import fetchFunction from './fetchFunction'

export default new Environment({
  network: Network.create(fetchFunction),
  store: new Store(new RecordSource()),
})

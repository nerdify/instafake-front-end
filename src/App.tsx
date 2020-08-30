import React from 'react'
import {RelayEnvironmentProvider} from 'react-relay/hooks'
import {BrowserRouter as Router} from 'react-router-dom'
import {ChakraProvider, CSSReset} from '@chakra-ui/core'
import theme from '@chakra-ui/theme'

import relayEnvironment from 'relay/environment'

import {Header} from 'components'
import {AppRoutes} from 'pages/Route'

export function App() {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Router>
        <ChakraProvider theme={theme}>
          <CSSReset />

          <Header />
          <AppRoutes />
        </ChakraProvider>
      </Router>
    </RelayEnvironmentProvider>
  )
}

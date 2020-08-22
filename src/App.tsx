import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {ChakraProvider, CSSReset} from '@chakra-ui/core'
import theme from '@chakra-ui/theme'

import {Header} from 'components/Header'
import {AppRoutes} from 'pages/Route'

export function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <CSSReset />

        <Header />
        <AppRoutes />
      </ChakraProvider>
    </Router>
  )
}

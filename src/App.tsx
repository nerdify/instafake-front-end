import React from 'react'
import {Button, ChakraProvider, CSSReset} from '@chakra-ui/core'
import theme from '@chakra-ui/theme'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Button>Test</Button>
    </ChakraProvider>
  )
}

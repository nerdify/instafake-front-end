import React, {lazy, Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import {Container} from '@chakra-ui/core'

const Timeline = lazy(() => import(`pages/Timeline`))

export function AppRoutes() {
  return (
    <Container maxW="lg" pt={8}>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Timeline />} path="/" />
        </Routes>
      </Suspense>
    </Container>
  )
}

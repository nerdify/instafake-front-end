import React, {lazy, Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import {Container} from '@chakra-ui/react'

const Post = lazy(() => import(`pages/Post`))
const CreatePost = lazy(() => import(`pages/CreatePost`))
const Timeline = lazy(() => import(`pages/Timeline`))

export function AppRoutes() {
  return (
    <Container maxW="lg" pt={8}>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Timeline />} path="/" />

          <Route element={<CreatePost />} path="create/post" />
          <Route element={<Post />} path="posts/:id" />
        </Routes>
      </Suspense>
    </Container>
  )
}

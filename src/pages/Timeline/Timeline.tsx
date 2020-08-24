import React from 'react'

import {StoriesCard} from './components/StoriesCard'
import {Post} from '../../components/Post'
import {Stack} from '@chakra-ui/core'

export function Timeline() {
  return (
    <div>
      <StoriesCard />
      <Stack spacing={4} pt={8}>
        {Array.from(Array(10).keys()).map((item) => (
          <Post key={item} />
        ))}
      </Stack>
    </div>
  )
}

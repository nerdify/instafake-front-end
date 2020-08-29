import React from 'react'
import {graphql, useLazyLoadQuery} from 'react-relay/hooks'
import {Stack} from '@chakra-ui/core'

import {TimelinePostsQuery} from './__generated__/TimelinePostsQuery.graphql'

import {Post} from 'components'
import {StoriesCard} from './components'

export function Timeline() {
  const {posts} = useLazyLoadQuery<TimelinePostsQuery>(
    graphql`
      query TimelinePostsQuery {
        posts(first: 1) {
          edges {
            node {
              ...Post_post
              id
            }
          }
        }
      }
    `,
    {}
  )

  return (
    <Stack spacing={4} pb={4}>
      <StoriesCard />

      {posts.edges.map((edge) => {
        return <Post key={edge.node.id} post={edge.node} />
      })}
    </Stack>
  )
}

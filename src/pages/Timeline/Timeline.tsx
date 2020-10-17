import React, {useMemo} from 'react'
import {graphql, useLazyLoadQuery, useSubscription} from 'react-relay/hooks'
import {Stack} from '@chakra-ui/core'

import {TimelinePostsQuery} from './__generated__/TimelinePostsQuery.graphql'

import {Post} from 'components'
import {StoriesCard} from './components'

export function Timeline() {
  const {posts} = useLazyLoadQuery<TimelinePostsQuery>(
    graphql`
      query TimelinePostsQuery {
        posts(first: 10, orderBy: {column: CREATED_AT, order: DESC}) {
          edges {
            node {
              ...Post_post @arguments(first: 2)
              id
            }
          }
        }
      }
    `,
    {}
  )

  const subscriptionConfig = useMemo(
    () => ({
      variables: {},
      subscription: graphql`
        subscription TimelinePostUpdatedSubscription {
          postUpdated {
            likes(first: 1) {
              pageInfo {
                total
              }
            }
          }
        }
      `,
    }),
    []
  )

  useSubscription(subscriptionConfig)

  return (
    <Stack spacing={4} pb={4} maxW="container.sm">
      <StoriesCard />

      {posts.edges.map((edge) => {
        return <Post key={edge.node.id} post={edge.node} />
      })}
    </Stack>
  )
}

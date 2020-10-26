import React from 'react'
import {useParams} from 'react-router-dom'
import {graphql, useLazyLoadQuery} from 'react-relay/hooks'
import {Flex} from '@chakra-ui/core'

import {Gallery, Header} from '../../components/Post/components'

import {PostCommentList} from './components'

import {PostPostQuery} from './__generated__/PostPostQuery.graphql'

export function Post() {
  const {id} = useParams()
  const {post} = useLazyLoadQuery<PostPostQuery>(
    graphql`
      query PostPostQuery($id: ID!) {
        post(id: $id) {
          id

          ...Header_post

          comments(first: 12, orderBy: {column: CREATED_AT, order: DESC})
            @connection(filters: [], key: "Post_comments") {
            edges {
              node {
                ...PostComment_comment
                id
              }
            }
          }

          images {
            ...Gallery_images
          }

          likes(first: 1) {
            pageInfo {
              total
            }
          }

          rootComment {
            id
            ...PostComment_comment
          }
        }
      }
    `,
    {id}
  )

  const comments = post.comments.edges.map(({node: comment}) => comment)

  comments.unshift(post.rootComment)

  console.log(comments)

  return (
    <Flex
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      flex={1}
    >
      <Flex w="60%">
        <Gallery images={post.images} />
      </Flex>
      <Flex flex={1} direction="column">
        <Header post={post} />
        <PostCommentList comments={comments} />
      </Flex>
    </Flex>
  )
}

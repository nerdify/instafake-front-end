import React from 'react'
import {useParams} from 'react-router-dom'
import {graphql, useLazyLoadQuery} from 'react-relay/hooks'
import {Box, Flex, Text} from '@chakra-ui/react'
import {formatDistanceToNow} from 'date-fns'

import {
  Actions,
  CommentTextArea,
  Gallery,
  Header,
} from '../../components/Post/components'

import {PostCommentList} from './components'

import {PostPostQuery} from './__generated__/PostPostQuery.graphql'

export function Post() {
  const {id} = useParams()
  const {post} = useLazyLoadQuery<PostPostQuery>(
    graphql`
      query PostPostQuery($id: ID!) {
        post(id: $id) {
          id
          createdAt

          ...Actions_post
          ...CommentTextArea_post
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
        <Box>
          <Box borderTop="1px solid" borderColor="gray.200" p={4}>
            <Actions post={post} />
            {post.likes.pageInfo.total > 0 && (
              <Text fontSize="sm" fontWeight="semibold" mt={2}>
                {post.likes.pageInfo.total} Me gusta
              </Text>
            )}
            <Text
              color="gray.500"
              fontSize="10px"
              mt={2}
              textTransform="uppercase"
            >
              {formatDistanceToNow(new Date(post.createdAt))}
            </Text>
          </Box>
          <CommentTextArea post={post} />
        </Box>
      </Flex>
    </Flex>
  )
}

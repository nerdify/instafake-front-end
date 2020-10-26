/* eslint relay/must-colocate-fragment-spreads:0 */
import React, {useState} from 'react'
import {graphql, useFragment} from 'react-relay/hooks'
import {Box, Text} from '@chakra-ui/core'

import {Post_post$key} from './__generated__/Post_post.graphql'

import {
  Actions,
  Comment,
  CommentList,
  CommentTextArea,
  Gallery,
  Header,
} from './components'

import {PostModal} from 'components'

interface PostProps {
  post: Post_post$key
}

export function Post(props: PostProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const post = useFragment(
    graphql`
      fragment Post_post on Post @argumentDefinitions(first: {type: "Int!"}) {
        ...Actions_post
        ...CommentTextArea_post
        ...Header_post
        id
        rootComment {
          ...Comment_comment
        }
        comments(first: $first, orderBy: {column: CREATED_AT, order: DESC})
          @connection(filters: [], key: "Post_comments") {
          pageInfo {
            total
          }
          edges {
            node {
              ...CommentList_comments
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
      }
    `,
    props.post
  )

  return (
    <Box bg="white" border="1px solid" borderColor="gray.200" borderRadius="md">
      <button
        onClick={() => {
          window.history.pushState(null, null, `posts/${post.id}`)
          setIsModalOpen(true)
        }}
      >
        Open in modal...
      </button>
      {isModalOpen && <PostModal postId={post.id} />}

      <Header post={post} />

      <Gallery images={post.images} />

      <Box p={4}>
        <Actions post={post} />

        {post.likes.pageInfo.total > 0 && (
          <Text fontSize="sm" fontWeight="semibold" pt={2}>
            {post.likes.pageInfo.total} me gusta
          </Text>
        )}

        {post.rootComment && <Comment comment={post.rootComment} />}

        <CommentList comments={post.comments.edges.map((edge) => edge.node)} />

        <Text color="gray.500" fontSize="xs" mt={1} textTransform="uppercase">
          Hace 15 horas
        </Text>
      </Box>
      <CommentTextArea post={post} />
    </Box>
  )
}

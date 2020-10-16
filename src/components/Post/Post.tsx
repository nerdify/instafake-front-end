/* eslint relay/must-colocate-fragment-spreads: off */
import React, {useState} from 'react'
import {graphql, useFragment} from 'react-relay/hooks'
import {Avatar, Box, Flex, Heading, Stack, Text} from '@chakra-ui/core'
import {faEllipsisH as falEllipsisH} from '@fortawesome/pro-light-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {Post_post$key} from './__generated__/Post_post.graphql'

import {Actions, Comment, CommentTextArea, Gallery, Header} from './components'

import {PostModal} from 'components'

interface PostProps {
  post: Post_post$key
}

export function Post(props: PostProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const post = useFragment(
    graphql`
      fragment Post_post on Post {
        ...Actions_post
        ...CommentTextArea_post

        description
        id
        comments(first: 3, orderBy: {column: CREATED_AT, order: DESC})
          @connection(filters: [], key: "Post_comments") {
          pageInfo {
            total
          }
          edges {
            node {
              ...Comment_comment
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
        user {
          username
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
      <Header />
      <Flex
        justify="space-between"
        align="center"
        py={2}
        px={4}
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Stack isInline align="center">
          <Box
            border="1px solid"
            borderColor="gray.200"
            borderRadius="full"
            p="2px"
          >
            <Avatar
              boxShadow="sm"
              size="sm"
              src="https://images.unsplash.com/photo-1577565177023-d0f29c354b69?fit=crop&h=64&w=64&q=80"
            />
          </Box>
          <Box>
            <Heading size="xs">{post.user.username}</Heading>
            <Box fontSize="xs">location...</Box>
          </Box>
        </Stack>
        <FontAwesomeIcon icon={falEllipsisH} size="2x" />
      </Flex>
      <Gallery images={post.images} />

      <Box p={4}>
        <Actions post={post} />

        {post.likes.pageInfo.total > 0 && (
          <Text fontSize="sm" fontWeight="semibold" pt={2}>
            {post.likes.pageInfo.total} me gusta
          </Text>
        )}
        <Flex>
          <Stack isInline fontSize="sm" pt={1} spacing={1}>
            <Text fontWeight="semibold">{post.user.username}</Text>
            <Text>{post.description}</Text>
          </Stack>
        </Flex>
        {post.comments.pageInfo.total > 0 && (
          <Text color="gray.500" fontSize="sm">
            Ver los {post.comments.pageInfo.total} comentarios
          </Text>
        )}
        {post.comments.edges
          .map((edge) => <Comment comment={edge.node} key={edge.node.id} />)
          .reverse()}
        <Text color="gray.500" fontSize="xs" mt={1} textTransform="uppercase">
          Hace 15 horas
        </Text>
      </Box>
      <CommentTextArea post={post} />
    </Box>
  )
}

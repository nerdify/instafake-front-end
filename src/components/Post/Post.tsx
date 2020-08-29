import React from 'react'
import {graphql, useFragment} from 'react-relay/hooks'
import TextareaAutosize from 'react-textarea-autosize'
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Textarea,
  Stack,
  Text,
} from '@chakra-ui/core'
import {faEllipsisH as falEllipsisH} from '@fortawesome/pro-light-svg-icons'
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from '@fortawesome/pro-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {Post_post$key} from './__generated__/Post_post.graphql'

import {Comment} from './components'

interface PostProps {
  post: Post_post$key
}

export function Post(props: PostProps) {
  const post = useFragment(
    graphql`
      fragment Post_post on Post {
        description
        comments(first: 3) {
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
        user {
          username
        }
      }
    `,
    props.post
  )

  return (
    <Box bg="white" border="1px solid" borderColor="gray.200" borderRadius="md">
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
      <Flex>
        <img src="https://source.unsplash.com/random/1024x600" alt="test" />
      </Flex>
      <Box p={4}>
        <Flex align="center" justify="space-between">
          <Stack isInline spacing={4}>
            <FontAwesomeIcon icon={faHeart} size="lg" />
            <FontAwesomeIcon icon={faComment} size="lg" />
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
          </Stack>
          <Flex>
            <FontAwesomeIcon icon={faBookmark} size="lg" />
          </Flex>
        </Flex>
        <Text fontSize="sm" fontWeight="semibold" pt={2}>
          10,947 Me Gusta
        </Text>
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
        {post.comments.edges.map((edge) => (
          <Comment comment={edge.node} key={edge.node.id} />
        ))}

        <Text color="gray.500" fontSize="xs" mt={1} textTransform="uppercase">
          Hace 15 horas
        </Text>
      </Box>
      <Flex align="center" borderTop="1px solid" borderColor="gray.200">
        <Textarea
          as={TextareaAutosize}
          border={0}
          maxH="80px"
          minH={6}
          p={4}
          placeholder="Agrega un comentario"
          resize="none"
          variant="unstyled"
        />
        <Button
          color="blue.200"
          fontSize="sm"
          p={4}
          variant="link"
          _hover={{
            textDecoration: `none`,
          }}
        >
          Publicar
        </Button>
      </Flex>
    </Box>
  )
}

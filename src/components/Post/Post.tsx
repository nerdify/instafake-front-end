import React, {useState} from 'react'
import {graphql, useFragment} from 'react-relay/hooks'
import {useMutation} from 'react-relay-mutation'
import TextareaAutosize from 'react-textarea-autosize'
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Textarea,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/core'
import {faEllipsisH as falEllipsisH} from '@fortawesome/pro-light-svg-icons'
import {faComment, faPaperPlane} from '@fortawesome/pro-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {Post_post$key} from './__generated__/Post_post.graphql'
import {PostCreateCommentMutation} from './__generated__/PostCreateCommentMutation.graphql'

import {BookmarkButton, Comment, LikeButton} from './components'

interface PostProps {
  post: Post_post$key
}

export function Post(props: PostProps) {
  const [textareaValue, setTextareaValue] = useState(``)
  const post = useFragment(
    graphql`
      fragment Post_post on Post {
        ...BookmarkButton_post
        ...LikeButton_subject
        description
        id
        imageUrl
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
  const [createCommentCommit, {loading: createCommentLoading}] = useMutation<
    PostCreateCommentMutation
  >(graphql`
    mutation PostCreateCommentMutation($input: CreateCommentInput!) {
      createComment(input: $input) {
        commentEdge {
          node {
            ...LikeButton_subject
            text
            user {
              username
            }
          }
        }
      }
    }
  `)

  function handleSubmitComment() {
    createCommentCommit({
      variables: {
        input: {
          postId: `UG9zdDoxCg==`,
          text: textareaValue,
          userId: `VXNlcjoxCg==`,
        },
      },
      configs: [
        {
          edgeName: `commentEdge`,
          parentID: post.id,
          type: `RANGE_ADD`,
          connectionInfo: [
            {
              key: `Post_comments`,
              rangeBehavior: `prepend`,
            },
          ],
        },
      ],
      onCompleted: () => {
        setTextareaValue(``)
      },
    })
  }

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
        <Image src={post.imageUrl} w="full" />
      </Flex>
      <Box p={4}>
        <Flex align="center" justify="space-between">
          <Stack isInline align="center" spacing={4}>
            <LikeButton subject={post} size="lg" />
            <FontAwesomeIcon icon={faComment} size="lg" />
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
          </Stack>
          <Flex>
            <BookmarkButton post={post} size="lg" />
          </Flex>
        </Flex>
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
      <Flex
        align="center"
        borderTop="1px solid"
        borderColor="gray.200"
        position="relative"
      >
        <Textarea
          as={TextareaAutosize}
          border={0}
          maxH="80px"
          minH={6}
          p={4}
          placeholder="Agrega un comentario"
          onChange={(e) => setTextareaValue(e.target.value)}
          resize="none"
          value={textareaValue}
          variant="unstyled"
        />
        <Button
          color="blue.200"
          fontSize="sm"
          isDisabled={textareaValue.trim().length === 0}
          onClick={handleSubmitComment}
          p={4}
          variant="link"
          _hover={{
            textDecoration: `none`,
          }}
        >
          Publicar
        </Button>
        {createCommentLoading && (
          <Center
            bg="whiteAlpha.500"
            bottom={0}
            left={0}
            position="absolute"
            right={0}
            top={0}
          >
            <Spinner />
          </Center>
        )}
      </Flex>
    </Box>
  )
}

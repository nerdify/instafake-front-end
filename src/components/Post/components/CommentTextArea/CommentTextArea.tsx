import React, {useState} from 'react'
import {useMutation} from 'react-relay-mutation'
import {graphql} from 'react-relay/hooks'

import {Flex, Textarea, Button, Center, Spinner} from '@chakra-ui/core'
import TextareaAutosize from 'react-textarea-autosize'

import {CommentTextAreaCreateCommentMutation} from './__generated__/CommentTextAreaCreateCommentMutation.graphql'

interface CommentTextAreaProps {
  postId: string
}

export function CommentTextArea(props: CommentTextAreaProps) {
  const [textareaValue, setTextareaValue] = useState(``)

  const [createCommentCommit, {loading: createCommentLoading}] = useMutation<
    CommentTextAreaCreateCommentMutation
  >(graphql`
    mutation CommentTextAreaCreateCommentMutation($input: CreateCommentInput!) {
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
          parentID: props.postId,
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
  )
}

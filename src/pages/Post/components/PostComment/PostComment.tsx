import React from 'react'
import {graphql, useFragment} from 'react-relay/hooks'
import {Avatar, Box, Text, Stack} from '@chakra-ui/core'
import {formatDistanceToNowStrict} from 'date-fns'

import {PostComment_comment$key} from './__generated__/PostComment_comment.graphql'

interface PostCommentProps {
  comment: PostComment_comment$key
}

export function PostComment({comment: _comment}: PostCommentProps) {
  const comment = useFragment(
    graphql`
      fragment PostComment_comment on Comment {
        ...LikeButton_subject
        createdAt
        text
        user {
          username
        }
      }
    `,
    _comment
  )

  return (
    <Box my={4}>
      <Stack isInline spacing={4} alignItems="flex-start">
        <Avatar
          boxShadow="xs"
          size="xs"
          src="https://images.unsplash.com/photo-1577565177023-d0f29c354b69?fit=crop&h=64&w=64&q=80"
        />
        <Box>
          <Text fontSize="sm">{comment.text}</Text>
          <Stack isInline spacing={4}>
            <Text fontSize="xs">
              {formatDistanceToNowStrict(new Date(comment.createdAt), {
                addSuffix: false,
              })}
            </Text>
            <Text fontSize="xs">12 Me gusta</Text>
            <Text fontSize="xs">Responder</Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

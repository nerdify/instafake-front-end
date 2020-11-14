import React from 'react'
import {graphql, useFragment} from 'react-relay/hooks'
import {Avatar, Box, Flex, Heading, Text, Spacer, Stack} from '@chakra-ui/core'
import {formatDistanceToNowStrict} from 'date-fns'

import {LikeButton} from '../../../../components/Post/components/'

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
        <Box width="full">
          <Flex align="center" justify="space-between" mb={2}>
            <Box fontSize="sm" display="inline">
              <Heading as="h3" size="xs" display="inline" mr={2}>
                {comment.user.username}
              </Heading>
              <Text display="inline">{comment.text}</Text>
            </Box>
            <Spacer />
            <Box ml={4}>
              <LikeButton subject={comment} size="xs" />
            </Box>
          </Flex>
          <Stack isInline spacing={4}>
            <Text fontSize="xs">
              {formatDistanceToNowStrict(new Date(comment.createdAt), {
                addSuffix: false,
              })}
            </Text>
            {comment.likes.pageInfo.total > 0 && (
              <Text fontSize="xs">{comment.likes.pageInfo.total} Me gusta</Text>
            )}
            <Text fontSize="xs">Responder</Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

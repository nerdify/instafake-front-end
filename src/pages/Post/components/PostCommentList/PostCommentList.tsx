import React from 'react'
import {Box} from '@chakra-ui/core'

import {PostComment as Comment} from '../PostComment'

export function PostCommentList({comments}) {
  return (
    <Box p={4}>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </Box>
  )
}

import React from 'react'
import {Box} from '@chakra-ui/react'

import {PostComment as Comment} from '../PostComment'

export function PostCommentList({comments}) {
  return (
    <Box p={4} overflowY="scroll" maxHeight="500px">
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </Box>
  )
}

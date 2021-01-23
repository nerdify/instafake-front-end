import React from 'react'
import {Flex} from '@chakra-ui/react'

import {PostComment as Comment} from '../PostComment'

export function PostCommentList({comments}) {
  return (
    <Flex p={4} overflowY="scroll" flexDirection="column" flex={1}>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </Flex>
  )
}

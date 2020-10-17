import React from 'react'
import {graphql, useFragment} from 'react-relay/hooks'
import {Box, Text} from '@chakra-ui/core'
import {Comment} from '../Comment'

export function CommentList(props) {
  const comments = useFragment(
    graphql`
      fragment CommentList_comments on Comment @relay(plural: true) {
        ...Comment_comment
        id
      }
    `,
    props.comments
  )

  return (
    <Box>
      {comments.length > 0 && (
        <Text color="gray.500" fontSize="sm">
          Ver los {comments.length} comentarios
        </Text>
      )}

      {comments
        .map((comment) => <Comment comment={comment} key={comment.id} />)
        .reverse()}
    </Box>
  )
}

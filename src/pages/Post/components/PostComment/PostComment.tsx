import React from 'react'
import {graphql, useFragment} from 'react-relay/hooks'

import {PostComment_comment$key} from './__generated__/PostComment_comment.graphql'

interface PostCommentProps {
  comment: PostComment_comment$key
}

export function PostComment({comment: _comment}: PostCommentProps) {
  const comment = useFragment(
    graphql`
      fragment PostComment_comment on Comment {
        ...LikeButton_subject
        text
        user {
          username
        }
      }
    `,
    _comment
  )
  console.log({comment})

  return <div>{comment.text}</div>
}

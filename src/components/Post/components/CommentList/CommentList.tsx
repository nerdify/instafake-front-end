import React from 'react'
import {graphql, useFragment} from 'react-relay/hooks'
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

  return comments
    .map((comment) => <Comment comment={comment} key={comment.id} />)
    .reverse()
}

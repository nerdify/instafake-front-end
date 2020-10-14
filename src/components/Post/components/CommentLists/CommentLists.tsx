import React from 'react'
import {Comment} from '../Comment'

export function CommentLists(props) {
  const post = props.post
  console.log(post)
  return post.comments.edges
    .map((edge) => <Comment comment={edge.node} key={edge.node.id} />)
    .reverse()
}

import React from 'react'
import {graphql, useFragment} from 'react-relay/hooks'
import {Comment} from '../Comment'
import {Text} from '@chakra-ui/core'

export function CommentList({post}) {
  const {comments} = useFragment(
    graphql`
      fragment CommentList_post on Post
      @argumentDefinitions(first: {type: "Int!"}) {
        id
        comments(first: $first, orderBy: {column: CREATED_AT, order: DESC})
          @connection(filters: [], key: "Post_comments") {
          pageInfo {
            total
          }
          edges {
            node {
              ...Comment_comment
              id
            }
          }
        }
      }
    `,
    post
  )

  return (
    <div>
      {comments.pageInfo.total > 0 && (
        <Text color="gray.500" fontSize="sm">
          Ver los {comments.pageInfo.total} comentarios
        </Text>
      )}
      {comments.edges
        .map(({node: comment}) => (
          <Comment comment={comment} key={comment.id} />
        ))
        .reverse()}
    </div>
  )
}

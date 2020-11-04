/* eslint relay/must-colocate-fragment-spreads:0 */
import React from 'react'
import {Link} from 'react-router-dom'
import {graphql, useFragment} from 'react-relay/hooks'
import {Flex, Stack} from '@chakra-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComment, faPaperPlane} from '@fortawesome/pro-regular-svg-icons'

import {BookmarkButton} from './components'
import {LikeButton} from '../LikeButton'

import {Actions_post$key} from './__generated__/Actions_post.graphql'

interface ActionsProps {
  post: Actions_post$key
}

export function Actions({post: _post}: ActionsProps) {
  const post = useFragment(
    graphql`
      fragment Actions_post on Post {
        ...BookmarkButton_post
        ...LikeButton_subject

        id
      }
    `,
    _post
  )
  return (
    <Flex align="center" justify="space-between">
      <Stack isInline align="center" spacing={4}>
        <LikeButton subject={post} size="lg" />
        <Link to={`posts/${post.id}`}>
          <FontAwesomeIcon icon={faComment} size="lg" />
        </Link>
        <FontAwesomeIcon icon={faPaperPlane} size="lg" />
      </Stack>
      <Flex>
        <BookmarkButton post={post} size="lg" />
      </Flex>
    </Flex>
  )
}

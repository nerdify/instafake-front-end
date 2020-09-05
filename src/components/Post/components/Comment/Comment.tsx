import React, {useMemo, useState} from 'react'
import {graphql, useFragment} from 'react-relay/hooks'
import {Box, Stack, Text} from '@chakra-ui/core'
import {faHeart} from '@fortawesome/pro-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {Comment_comment$key} from './__generated__/Comment_comment.graphql'

interface CommentProps {
  comment: Comment_comment$key
}

const COMMENT_TEXT_LENGTH = 52

export function Comment(props: CommentProps) {
  const comment = useFragment(
    graphql`
      fragment Comment_comment on Comment {
        text
        user {
          username
        }
      }
    `,
    props.comment
  )

  const [isTruncated, setIsTruncated] = useState(true)
  const textTruncated = useMemo(() => {
    return `${comment.text.slice(0, COMMENT_TEXT_LENGTH)}...`
  }, [comment.text])

  function handleClick() {
    setIsTruncated(false)
  }

  return (
    <Stack isInline align="center" justify="space-between">
      <Box fontSize="sm">
        <Text d="inline" mr={1}>
          <Box as="span" fontWeight="semibold" mr={1}>
            {comment.user.username}
          </Box>
          {isTruncated ? textTruncated : comment.text}
        </Text>
        {isTruncated && <button onClick={handleClick}>más</button>}
      </Box>
      <FontAwesomeIcon icon={faHeart} size="xs" />
    </Stack>
  )
}

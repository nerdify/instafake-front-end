import React from 'react'
import {graphql, useFragment} from 'react-relay/hooks'
import {useMutation} from 'react-relay-mutation'
import {Box} from '@chakra-ui/core'
import {faHeart as farHeart} from '@fortawesome/pro-regular-svg-icons'
import {faHeart as fasHeart} from '@fortawesome/pro-solid-svg-icons'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'

import {LikeButton_subject$key} from './__generated__/LikeButton_subject.graphql'
import {LikeButtonAddLikeMutation} from './__generated__/LikeButtonAddLikeMutation.graphql'

// eslint-disable-next-line quotes
interface LikeButtonProps extends Pick<FontAwesomeIconProps, 'size'> {
  subject: LikeButton_subject$key
}

export function LikeButton({size, subject: _subject}: LikeButtonProps) {
  const subject = useFragment(
    graphql`
      fragment LikeButton_subject on Likeable {
        __typename
        viewerHasLiked
        ... on Comment {
          id
        }
        ... on Post {
          id
        }
      }
    `,
    _subject
  )
  const [addLikeCommit] = useMutation<LikeButtonAddLikeMutation>(graphql`
    mutation LikeButtonAddLikeMutation($input: AddLikeInput!) {
      addLike(input: $input) {
        subject {
          __typename
          viewerHasLiked
          ... on Comment {
            id
          }
          ... on Post {
            id
          }
        }
      }
    }
  `)

  function handleClick() {
    addLikeCommit({
      optimisticResponse: {
        addLike: {
          subject: {
            __typename: subject.__typename,
            id: subject.id,
            viewerHasLiked: true,
          },
        },
      },
      variables: {
        input: {
          subjectId: subject.id,
        },
      },
    })
  }

  return (
    <button onClick={handleClick}>
      <Box
        as={FontAwesomeIcon}
        color={subject.viewerHasLiked && `red.500`}
        icon={subject.viewerHasLiked ? fasHeart : farHeart}
        size={size}
      />
    </button>
  )
}

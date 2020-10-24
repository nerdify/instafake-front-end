import React from 'react'
import {graphql, useFragment} from 'react-relay/hooks'
import {useMutation} from 'react-relay-mutation'
import {Box} from '@chakra-ui/core'
import {faBookmark as farBookmark} from '@fortawesome/pro-regular-svg-icons'
import {faBookmark as fasBookmark} from '@fortawesome/pro-solid-svg-icons'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'

import {BookmarkButton_post$key} from './__generated__/BookmarkButton_post.graphql'
import {BookmarkButtonCreateBookmarkMutation} from './__generated__/BookmarkButtonCreateBookmarkMutation.graphql'
import {BookmarkButtonRemoveBookmarkMutation} from './__generated__/BookmarkButtonRemoveBookmarkMutation.graphql'

// eslint-disable-next-line quotes
interface BookmarkButtonProps extends Pick<FontAwesomeIconProps, 'size'> {
  post: BookmarkButton_post$key
}

export function BookmarkButton({size, post: _post}: BookmarkButtonProps) {
  const post = useFragment(
    graphql`
      fragment BookmarkButton_post on Post {
        id
        viewerHasBookmarked
      }
    `,
    _post
  )

  const [addBookMarkedCommit] = useMutation<
    BookmarkButtonCreateBookmarkMutation
  >(graphql`
    mutation BookmarkButtonCreateBookmarkMutation(
      $input: CreateBookmarkInput!
    ) {
      createBookmark(input: $input) {
        post {
          id
          viewerHasBookmarked
        }
      }
    }
  `)

  const [removeBookMarkedCommit] = useMutation<
    BookmarkButtonRemoveBookmarkMutation
  >(graphql`
    mutation BookmarkButtonRemoveBookmarkMutation(
      $input: RemoveBookmarkInput!
    ) {
      removeBookmark(input: $input) {
        post {
          id
          viewerHasBookmarked
        }
      }
    }
  `)

  function addBookMark() {
    addBookMarkedCommit({
      optimisticResponse: {
        createBookmark: {
          post: {
            id: post.id,
            viewerHasBookmarked: true,
          },
        },
      },
      variables: {
        input: {
          postId: post.id,
        },
      },
    })
  }

  function removeBookMark() {
    removeBookMarkedCommit({
      optimisticResponse: {
        removeBookmark: {
          post: {
            id: post.id,
            viewerHasBookmarked: false,
          },
        },
      },
      variables: {
        input: {
          postId: post.id,
        },
      },
    })
  }

  function handleClick() {
    if (post.viewerHasBookmarked) {
      removeBookMark()
    } else {
      addBookMark()
    }
  }

  return (
    <button onClick={handleClick}>
      <Box
        as={FontAwesomeIcon}
        color={post.viewerHasBookmarked && `gray.900`}
        icon={post.viewerHasBookmarked ? fasBookmark : farBookmark}
        size={size}
      />
    </button>
  )
}

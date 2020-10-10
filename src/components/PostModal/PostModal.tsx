/* eslint relay/must-colocate-fragment-spreads: off */
import React, {Suspense} from 'react'
import {graphql, useLazyLoadQuery} from 'react-relay/hooks'
import {Modal, ModalBody, ModalContent, ModalOverlay} from '@chakra-ui/core'

import {PostModalPostQuery} from './__generated__/PostModalPostQuery.graphql'

import {Post} from 'components'

interface PostModalProps {
  postId: string
}

export function PostModal(props: PostModalProps) {
  return (
    <Modal isOpen closeOnEsc closeOnOverlayClick onClose={() => {}} size="3xl">
      <ModalOverlay>
        <ModalContent>
          <ModalBody p={0}>
            <Suspense fallback={<div>loading post in modal</div>}>
              <PostModalBody {...props} />
            </Suspense>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

function PostModalBody({postId}: PostModalProps) {
  const {post} = useLazyLoadQuery<PostModalPostQuery>(
    graphql`
      query PostModalPostQuery($id: ID!) {
        post(id: $id) {
          ...Post_post
        }
      }
    `,
    {id: postId}
  )

  return <Post post={post} />
}

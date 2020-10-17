import React from 'react'
import {useParams} from 'react-router-dom'
import {graphql, useLazyLoadQuery} from 'react-relay/hooks'
import {Avatar, Box, Flex, Heading, Stack} from '@chakra-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisH as falEllipsisH} from '@fortawesome/pro-light-svg-icons'

import {Gallery, CommentList} from '../../components/Post/components'

import {PostPostQuery} from './__generated__/PostPostQuery.graphql'

export function Post() {
  const {id} = useParams()
  const {post} = useLazyLoadQuery<PostPostQuery>(
    graphql`
      query PostPostQuery($id: ID!) {
        post(id: $id) {
          description
          id

          comments(first: 10, orderBy: {column: CREATED_AT, order: DESC})
            @connection(filters: [], key: "Post_comments") {
            pageInfo {
              total
            }
            edges {
              node {
                ...CommentList_comments
              }
            }
          }

          images {
            ...Gallery_images
          }

          likes(first: 1) {
            pageInfo {
              total
            }
          }
          user {
            username
          }
        }
      }
    `,
    {id}
  )

  return (
    <Flex
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      flex={1}
    >
      <Flex w="60%">
        <Gallery images={post.images} />
      </Flex>
      <Flex flex={1} direction="column">
        <Flex
          justify="space-between"
          align="center"
          py={2}
          px={4}
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <Stack isInline align="center">
            <Box
              border="1px solid"
              borderColor="gray.200"
              borderRadius="full"
              p="2px"
            >
              <Avatar
                boxShadow="sm"
                size="sm"
                src="https://images.unsplash.com/photo-1577565177023-d0f29c354b69?fit=crop&h=64&w=64&q=80"
              />
            </Box>
            <Box>
              <Heading size="xs">{post.user.username}</Heading>
              <Box fontSize="xs">location...</Box>
            </Box>
          </Stack>
          <FontAwesomeIcon icon={falEllipsisH} size="2x" />
        </Flex>

        <CommentList comments={post.comments.edges.map((edge) => edge.node)} />
      </Flex>
    </Flex>
  )
}

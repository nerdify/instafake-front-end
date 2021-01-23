import React from 'react'
import {graphql, useFragment} from 'react-relay/hooks'
import {Avatar, Box, Flex, Heading, Stack} from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisH as falEllipsisH} from '@fortawesome/pro-light-svg-icons'

import {Header_post$key} from './__generated__/Header_post.graphql'

interface HeaderProps {
  post: Header_post$key
}

export function Header({post: _post}: HeaderProps) {
  const post = useFragment(
    graphql`
      fragment Header_post on Post {
        user {
          username
        }
      }
    `,
    _post
  )

  return (
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
  )
}

import React from 'react'
import {Avatar, Box, Flex, Heading} from '@chakra-ui/core'
import {faEllipsisH as fasEllipsisH} from '@fortawesome/pro-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export function Post() {
  return (
    <Box bg="white" border="1px solid" borderColor="gray.200" borderRadius="md">
      <Flex
        justify="space-between"
        align="center"
        py={2}
        px={4}
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Flex align="center">
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
          <Heading size="xs" ml={2}>
            verge
          </Heading>
        </Flex>
        <FontAwesomeIcon icon={fasEllipsisH}></FontAwesomeIcon>
      </Flex>
      <Flex>
        <img src="https://source.unsplash.com/random/1024x600" alt="test" />
      </Flex>
    </Box>
  )
}

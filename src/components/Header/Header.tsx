import React from 'react'
import {Box, Container, Flex, Heading} from '@chakra-ui/core'
import {faHouse as fasHouse} from '@fortawesome/pro-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export function Header() {
  return (
    <Box bg="white" borderBottom="1px solid" borderBottomColor="gray.200">
      <Container h={12} maxW="lg">
        <Flex align="center" h="full" justify="space-between">
          <Heading as="h1" fontWeight="normal">
            Instafake
          </Heading>
          <FontAwesomeIcon icon={fasHouse} size="lg" />
        </Flex>
      </Container>
    </Box>
  )
}

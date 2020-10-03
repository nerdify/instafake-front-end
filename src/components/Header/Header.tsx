import React from 'react'
import {Link} from 'react-router-dom'
import {Box, Container, Flex, Heading, Stack} from '@chakra-ui/core'
import {
  faPlus as fasPlus,
  faHouse as fasHouse,
} from '@fortawesome/pro-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export function Header() {
  return (
    <Box bg="white" borderBottom="1px solid" borderBottomColor="gray.200">
      <Container h={12} maxW="lg">
        <Flex align="center" h="full" justify="space-between">
          <Heading as="h1" fontWeight="normal">
            Instafake
          </Heading>
          <Stack isInline spacing={4}>
            <Link to="create/post">
              <FontAwesomeIcon icon={fasPlus} size="lg" />
            </Link>
            <FontAwesomeIcon icon={fasHouse} size="lg" />
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

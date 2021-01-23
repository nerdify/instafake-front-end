import React from 'react'
import {Avatar, Box, Stack} from '@chakra-ui/react'

export function StoriesCard() {
  return (
    <Stack
      isInline
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      p={4}
      spacing={4}
    >
      <Stack align="center" spacing={1}>
        <Box
          border="1px solid"
          borderColor="gray.200"
          borderRadius="full"
          p="2px"
        >
          <Avatar
            boxShadow="sm"
            size="lg"
            src="https://images.unsplash.com/photo-1577565177023-d0f29c354b69?fit=crop&h=64&w=64&q=80"
          />
        </Box>
        <Box fontSize="sm">hosmelq</Box>
      </Stack>
    </Stack>
  )
}

import React from 'react'
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Textarea,
  Stack,
  Text,
} from '@chakra-ui/core'
import {faEllipsisH as fasEllipsisH} from '@fortawesome/pro-solid-svg-icons'
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from '@fortawesome/pro-regular-svg-icons'
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
      <Box p={4}>
        <Flex align="center" justify="space-between">
          <Stack spacing={2} isInline>
            <FontAwesomeIcon icon={faHeart} size="lg" />
            <FontAwesomeIcon icon={faComment} size="lg" />
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
          </Stack>
          <Flex>
            <FontAwesomeIcon icon={faBookmark} size="lg" />
          </Flex>
        </Flex>
        <Text fontSize="sm" fontWeight="semibold" pt={2}>
          10,947 Me Gusta
        </Text>
        <Flex>
          <Stack isInline fontSize="sm" pt={1} spacing={1}>
            <Text fontWeight="semibold">verge</Text> <Text>Sunday</Text>
          </Stack>
        </Flex>
        <Text color="gray.500" fontSize="sm">
          Ver los 2,713 comentarios
        </Text>
        <Box>
          <Flex justify="space-between" align="center">
            <Stack isInline fontSize="sm" spacing={1}>
              <Text fontWeight="semibold">reddit</Text> <Text>Awesome</Text>
            </Stack>
            <FontAwesomeIcon icon={faHeart} size="xs" />
          </Flex>

          <Flex justify="space-between" align="center">
            <Stack isInline fontSize="sm" spacing={1}>
              <Text fontWeight="semibold">google</Text> <Text>Pro</Text>
            </Stack>
            <FontAwesomeIcon icon={faHeart} size="xs" />
          </Flex>
        </Box>
        <Text fontSize="xs" color="gray.500" mt={1}>
          zxcascxsdk HACE 15 HORAS
        </Text>
      </Box>
      <Flex borderTop="1px solid" borderColor="gray.200" align="center">
        <Textarea
          p={0}
          border={0}
          height={2}
          minH={6}
          maxH="80px"
          placeholder="Agrega un comentario"
          resize="none"
          variant="unstyled"
        />
        <Button color="blue.200" variant="link">
          Publicar
        </Button>
      </Flex>
    </Box>
  )
}

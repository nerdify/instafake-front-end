import {AnimateSharedLayout, motion} from 'framer-motion'
import React, {useState} from 'react'
import {graphql, useFragment} from 'react-relay/hooks'
import {Box, Flex, Spacer, Stack} from '@chakra-ui/core'
import {
  faChevronCircleLeft as fasChevronCircleLeft,
  faChevronCircleRight as fasChevronCircleRight,
} from '@fortawesome/pro-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {Gallery_images$key} from './__generated__/Gallery_images.graphql'

import {Arrow} from './components'

interface GalleryProps {
  images: Gallery_images$key
}

const IMAGE_WIDTH = 638

export function Gallery(props: GalleryProps) {
  const [imageIndex, setImageIndex] = useState(0)
  const images = useFragment(
    graphql`
      fragment Gallery_images on Image @relay(plural: true) {
        url
      }
    `,
    props.images
  )

  return (
    <Box overflow="hidden" position="relative">
      <Flex
        layout
        as={motion.div}
        position="relative"
        left={`${imageIndex * -IMAGE_WIDTH}px`}
        w={images.length * IMAGE_WIDTH}
      >
        {images.map((image, i) => (
          <Box
            as="img"
            flexShrink={0}
            key={i}
            src={image.url}
            w={IMAGE_WIDTH}
          />
        ))}
      </Flex>
      <Flex align="center" inset={0} position="absolute">
        {imageIndex > 0 && (
          <Arrow onClick={() => setImageIndex((index) => index - 1)}>
            <Box
              fixedWidth
              as={FontAwesomeIcon}
              color="whiteAlpha.800"
              icon={fasChevronCircleLeft}
              size="lg"
            />
          </Arrow>
        )}
        <Spacer />
        {imageIndex < images.length - 1 && (
          <Arrow onClick={() => setImageIndex((index) => index + 1)}>
            <Box
              fixedWidth
              as={FontAwesomeIcon}
              color="whiteAlpha.800"
              icon={fasChevronCircleRight}
              size="lg"
            />
          </Arrow>
        )}
      </Flex>
      <AnimateSharedLayout>
        <Stack isInline justify="center" mt={2} spacing={2}>
          {images.map((_, i) => (
            <Box
              bg="gray.300"
              borderRadius="full"
              boxSize={2}
              key={i}
              position="relative"
              onClick={() => setImageIndex(i)}
            >
              {imageIndex === i && (
                <Box
                  as={motion.div}
                  bg="blue.300"
                  borderRadius="inherit"
                  inset={0}
                  layoutId="dot"
                  position="absolute"
                  zIndex="docked"
                />
              )}
            </Box>
          ))}
        </Stack>
      </AnimateSharedLayout>
    </Box>
  )
}

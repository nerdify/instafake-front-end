import React, {ReactNode} from 'react'
import {Center} from '@chakra-ui/react'

interface ArrowProps {
  children: ReactNode
  onClick: () => void
}

export function Arrow({children, onClick}: ArrowProps) {
  return (
    <Center as="button" boxSize={10} onClick={onClick} p={4}>
      {children}
    </Center>
  )
}

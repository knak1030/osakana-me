import React from 'react'
import { Text, Fade, useColorModeValue } from '@chakra-ui/react'

type Props = {
  isOpen?: boolean
}

const SuccessStatement = ({ isOpen }: Props) => {
  const color = useColorModeValue('accent.600', 'accent.300')
  return (
    <Fade in={isOpen}>
      <Text color={color}>Thank you for your contact.</Text>
    </Fade>
  )
}

export default SuccessStatement

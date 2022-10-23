import React from 'react'
import { Text, useColorModeValue } from '@chakra-ui/react'

const ErrorStatement = () => {
  const color = useColorModeValue('danger.500', 'danger.300')
  return <Text color={color}>An error has occurred.<br />Please reload and try again.</Text>
}

export default ErrorStatement

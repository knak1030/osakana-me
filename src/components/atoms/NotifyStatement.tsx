import React, { ReactNode } from 'react'
import { Text, useColorModeValue } from '@chakra-ui/react'

type Prop = {
  errorMessage?: ReactNode
  successMessage?: ReactNode
  type: 'success'|'error'
}

const NotifyStatement = ({
  errorMessage = <>An error has occurred.<br />Please reload and try again.</>,
  successMessage = <>Thank you for your contact.</>,
  type
}: Prop) => {
  const successColor = useColorModeValue('accent.600', 'accent.300')
  const errorColor = useColorModeValue('danger.500', 'danger.300')
  const color = type === 'success' ? successColor : errorColor
  const message = type === 'success' ? successMessage : errorMessage

  return <Text color={color}>{message}</Text>
}

export default NotifyStatement

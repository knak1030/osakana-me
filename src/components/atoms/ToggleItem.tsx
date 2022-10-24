import React, { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

type Props = {
  children?: ReactNode
  hidden?: boolean
}

const ToggleItem = ({ children, hidden = false }: Props) => {
  return (
    <Box hidden={hidden} position='absolute' w='100%' textAlign={'center'}>
      {children}
    </Box>
  )
}

export default ToggleItem

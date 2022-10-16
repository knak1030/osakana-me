import React from 'react'
import { Box } from '@chakra-ui/react'

type Props = {
  width: string
}

const DashIcon = ({ width = '0' }: Props) => {
  return <Box
    as={'span'}
    w={width}
    h={'1px'}
    mr={'1rem'}
    transition={'width .3s'}
    backgroundColor={'accent.600'}
  />
}

export default DashIcon

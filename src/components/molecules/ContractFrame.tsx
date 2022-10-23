import React, { ReactNode } from 'react'
import Image from 'next/image'
import { Box, Flex } from '@chakra-ui/react'
import logo from '@public/l-black.svg'

type Props = {
  children?: ReactNode
}

const ContractFrame = ({ children }: Props) => {
  return (
    <Flex m={'auto'} pb={'3rem'} maxW={'480px'} justifyContent={'center'} alignItems={'center'} direction={'column'}>
      <Box w={'80px'}>
        <Image src={logo} alt={'logo of me'} width={80} />
      </Box>
      <Box m={'auto'} w={'100%'}>
        {children}
      </Box>
    </Flex>
  )
}

export default ContractFrame

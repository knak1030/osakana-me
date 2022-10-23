import React, { ReactNode } from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import bgimg from '@public/bg.svg'

type Props = {
  children?: ReactNode
}

const Frame = ({ children }: Props) => {
  return (
    <>
      <Box position={'relative'} maxW={'1200px'} h={'100vh'} overflow={'hidden'} m={'auto'}>
        <Box position={'absolute'} w={'100%'} top={{md: '50%', base: '0'}} left={'0'} transform={{md: 'translateY(-50%)', base: 'unset'}} p={{base: '3rem 0 0 0', md: '0'}}>
          <Image src={bgimg} alt="background image" />
        </Box>
        <Box w={{base: '90vw', md: '70vw'}} maxW={'100%'} m={'auto'} position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'}>
          {children}
        </Box>
      </Box>
    </>
  )
}

export default Frame

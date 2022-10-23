import React, { ReactNode } from 'react'
import { TabList as ChakraTabList } from '@chakra-ui/react'

type Props = {
  children?: ReactNode
}

const TabList = ({ children }: Props) => {
  return (
    <ChakraTabList w={{base: '100%', md: '15%'}} flexDirection={'column'} border={'none'} justifyContent={'flex-end'} alignItems={'flex-end'}>
      {children}
    </ChakraTabList> 
  )
}

export default TabList

import React, { ReactNode } from 'react'
import { TabPanels as ChakraTabPanel, Box, Fade } from '@chakra-ui/react'

type Props = {
  children?: ReactNode
  isOpen: boolean
}

const TabPanels = ({ children, isOpen }: Props) => {
  return (
    <Box w={{base: '100%', md: '85%'}} h={'100%'} position={'relative'}>
      <Fade in={isOpen}>
        <ChakraTabPanel
          onClick={(e) => {e.stopPropagation()}}
          w={'100%'} h={'100%'} position={'absolute'}
        >
          {children}
        </ChakraTabPanel>
      </Fade>
    </Box>
  )
}

export default TabPanels

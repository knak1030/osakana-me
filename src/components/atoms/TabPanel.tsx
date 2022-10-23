import React, { ReactNode } from 'react'
import { TabPanel as ChakraTabPanel, useColorModeValue } from '@chakra-ui/react'

type Props = {
  children?: ReactNode
}

const TabPanel = ({ children }: Props) => {
  const tabPanelBg = useColorModeValue('rgba(217, 217, 217, 0.1)', 'rgba(46, 52, 64, 0.5)')
  return (
    <>
      <ChakraTabPanel bgColor={tabPanelBg} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.25)'} backdropFilter={'blur(11.5px)'} h={'100%'} rounded='lg' overflowY={'scroll'}>
        {children}
      </ChakraTabPanel>
    </>
  )
}

export default TabPanel

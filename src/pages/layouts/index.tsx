import React, { useState } from 'react'
import Image from 'next/image'
import { Box, Fade, Tabs, TabList, TabPanels, Tab, TabPanel, Stack, useDisclosure, useColorModeValue } from '@chakra-ui/react'
import DashIcon from '../components/DashIcon'
import ModeToggleButton from '../components/ModeToggleButton'
import icon from '../../public/bg.svg'
import { Panel } from '../../interfaces/index'

type Props = {
  panels: Panel[],
}

const Layout = ({ panels } : Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [tabIndex, setTabIndex] = useState(-1)

  const onOpenButStopPropagation = (e: React.SyntheticEvent) => {
    onOpen()
    e.stopPropagation()
  }

  const setTabIndexAndClose = () => {
    setTabIndex(-1)
    onClose()
  }

  const tabPanelBg = useColorModeValue('rgba(217, 217, 217, 0.1)', 'rgba(46, 52, 64, 0.5)')

  return (
    <>
      <Box 
        as={'main'} role={'main'}
        onClick={setTabIndexAndClose}
      >
        <Box position={'relative'} maxW={'1200px'} h={'100vh'} overflow={'hidden'} m={'auto'}>
          <Box position={'absolute'} w={'100%'} top={'50%'} left={'0'} transform={'translateY(-50%)'}>
            <Image src={icon} alt="logo of the author" />
          </Box>
          <Box w={'70vw'} maxW={'100%'} m={'auto'} position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'}>
            <Tabs
              variant={'line'}
              colorScheme='accent'
              defaultIndex={-1}
              index={tabIndex}
              onChange={(index) => setTabIndex(index)}
              position={'relative'} m={'9vh auto'} h={'80vh'} minH={'400px'} maxH={'744px'}
            >
              <Stack direction={'row'} align={'flex-end'} justify={'space-between'} h={'100%'}>
                <Box w={'85%'} h={'100%'} position={'relative'}>
                  <Fade in={isOpen}>
                    <TabPanels
                      onClick={(e) => {e.stopPropagation()}}
                      w={'100%'} h={'100%'} position={'absolute'}
                    >
                      {
                        panels.map((item, index) => 
                          <TabPanel key={index} bgColor={tabPanelBg} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.25)'} backdropFilter={'blur(11.5px)'} h={'100%'} rounded='lg' overflowY={'scroll'}>
                            {item.element}
                          </TabPanel>
                        )
                      }
                    </TabPanels>
                  </Fade>
                </Box>
                <TabList w={'15%'} flexDirection={'column'} border={'none'} justifyContent={'flex-end'}>
                  {
                    panels.map((item, index) => (
                      <Tab
                        key={index}
                        onClick={onOpenButStopPropagation}
                        m={'0'}
                        border={'none'}
                        justifyContent={'space-between'}
                        maxW={'160px'}
                      >
                        <DashIcon width={index === tabIndex ? '3rem' : '0' } />
                        {item.name}
                      </Tab>
                    ))
                  }
                  <ModeToggleButton />
                </TabList>
              </Stack>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Layout

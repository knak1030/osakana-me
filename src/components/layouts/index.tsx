import React, { useEffect, useContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { Box, Fade, Tabs, TabList, TabPanels, Tab, Stack, useDisclosure, useColorModeValue } from '@chakra-ui/react'
import DashIcon from '../atoms/DashIcon'
import ModeToggleButton from '../atoms/ModeToggleButton'
import icon from '../../public/bg.svg'
import { Panel } from '../../interfaces/index'
import { TabIndexContext } from '../../hooks/useTabIndex'
import TabPanel from '../atoms/TabPanel'

type Props = {
  panels: Panel[],
  defaultIndex?: number
}

const Layout = ({ panels, defaultIndex = -1 } : Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const tabCtx = useContext(TabIndexContext)
  const router = useRouter()

  const onOpenButStopPropagation = (index: number, e: React.SyntheticEvent) => {
    tabCtx.setTabIndex(index)
    onOpen()
    e.stopPropagation()
  }

  const setTabIndexAndClose = () => {
    tabCtx.setTabIndex(-1)
    onClose()
  }

  useEffect(() => {
    if (defaultIndex) {
      onOpen()
      tabCtx.setTabIndex(defaultIndex)
    }
  }, [onOpen, defaultIndex, router.asPath])

  return (
    <>
      <Box 
        as={'main'} role={'main'}
        onClick={setTabIndexAndClose}
      >
        <Box position={'relative'} maxW={'1200px'} h={'100vh'} overflow={'hidden'} m={'auto'}>
          <Box position={'absolute'} w={'100%'} top={{md: '50%', base: '0'}} left={'0'} transform={{md: 'translateY(-50%)', base: 'unset'}} p={{base: '3rem 0 0 0', md: '0'}}>
            <Image src={icon} alt="logo of the author" />
          </Box>
          <Box w={{base: '90vw', md: '70vw'}} maxW={'100%'} m={'auto'} position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'}>
            <Tabs
              variant={'line'}
              colorScheme='accent'
              defaultIndex={-1}
              index={tabCtx.tabIndex}
              onChange={(index) => tabCtx.setTabIndex(index)}
              position={'relative'} m={'9vh auto'} marginTop={{base: '3rem', md: '9vh'}} h={'80vh'} minH={'400px'} maxH={'744px'}
            >
              <Stack direction={{base: 'column', md: 'row'}} rowGap={'1rem'} align={'flex-end'} justify={'space-between'} h={'100%'}>
                <Box w={{base: '100%', md: '85%'}} h={'100%'} position={'relative'}>
                  <Fade in={isOpen}>
                    <TabPanels
                      onClick={(e) => {e.stopPropagation()}}
                      w={'100%'} h={'100%'} position={'absolute'}
                    >
                      {
                        panels?.map((item, index) =>
                          <TabPanel key={index}>{item.element}</TabPanel>
                        )
                      }
                    </TabPanels>
                  </Fade>
                </Box>
                <TabList w={{base: '100%', md: '15%'}} flexDirection={'column'} border={'none'} justifyContent={'flex-end'} alignItems={'flex-end'}>
                  {
                    panels?.map((item, index) => (
                      <Tab
                        key={index}
                        onClick={(e) => { onOpenButStopPropagation(index, e) }}
                        m={'0'}
                        border={'none'}
                        justifyContent={'space-between'}
                        maxW={'160px'}
                      >
                        <DashIcon width={index === tabCtx.tabIndex ? '3rem' : '0' } />
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

import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router';
import { Box, useDisclosure } from '@chakra-ui/react'

import { Panel } from '@interfaces/index'
import { TabIndexContext } from '@hooks/useTabIndex'

import ModeToggleButton from '@components//atoms/ModeToggleButton'
import TabPanel from '@components/atoms/TabPanel'
import TabList from '@components/atoms/TabList'

import Frame from '@components/molecules/Frame'
import Tabs from '@components/molecules/Tabs'
import Tab from '@components/molecules/Tab'
import TabPanels from '@components/molecules/TabPanels'

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onOpen, defaultIndex, router.asPath])

  return (
    <>
      <Box as={'main'} role={'main'} onClick={setTabIndexAndClose}>
        <Frame>
          <Tabs tabIndex={tabCtx.tabIndex} onChange={() => {(index: number) => tabCtx.setTabIndex(index)}}>
            <TabPanels isOpen={isOpen}>
              {
                panels?.map((item, index) => <TabPanel key={index}>{item.element}</TabPanel>)
              }
            </TabPanels>
            <TabList>
              {
                panels?.map((item, index) => (
                  <Tab key={index} onClick={(e) => { onOpenButStopPropagation(index, e) }} selected={index === tabCtx.tabIndex}>
                    {item.name}
                  </Tab>
                ))
              }
              <ModeToggleButton />
            </TabList>
          </Tabs>
        </Frame>
      </Box>
    </>
  )
}

export default Layout

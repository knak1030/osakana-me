import React, { ReactNode } from 'react'
import { Tab as ChakraTab } from '@chakra-ui/react'
import DashIcon from '@components/atoms/DashIcon'

type Props = {
  children: ReactNode
  selected: boolean
  onClick?: (e: React.SyntheticEvent) => void
}

const Tab = ({ children, selected, onClick }: Props) => {
  return (
    <ChakraTab
      onClick={onClick}
      m={'0'} border={'none'} justifyContent={'space-between'} maxW={'160px'}
    >
      <DashIcon width={selected ? '3rem' : '0' } />
      {children}
    </ChakraTab>
  )
}

export default Tab

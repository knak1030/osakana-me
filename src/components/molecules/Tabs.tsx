import React, { ReactNode } from 'react'
import { Tabs as ChakraTabs, Stack } from '@chakra-ui/react'

type Props = {
  children?: ReactNode
  tabIndex: number
  onChange?: () => void
}

const Tabs = ({ children, tabIndex, onChange }: Props) => {
  return (
    <ChakraTabs
      defaultIndex={-1}
      index={tabIndex}
      onChange={onChange}
      variant={'line'}
      colorScheme='accent'
      position={'relative'}m={'9vh auto'} marginTop={{base: '3rem', md: '9vh'}} h={'80vh'} minH={'400px'} maxH={'744px'}
    >
      <Stack direction={{base: 'column', md: 'row'}} rowGap={'1rem'} align={'flex-end'} justify={'space-between'} h={'100%'}>
        {children}
      </Stack>
    </ChakraTabs>
  )
}

export default Tabs

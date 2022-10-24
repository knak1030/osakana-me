import React, { ReactNode } from 'react'
import { Box, Fade } from '@chakra-ui/react'
import ToggleItem from '@components/atoms/ToggleItem'

type Props = {
  isOpenElement: ReactNode
  isCloseElement: ReactNode
  isOpen: boolean
}

const Toggle = ({ isOpenElement, isCloseElement, isOpen }: Props) => {
  return (
    <Box w={'100%'} position={'relative'} mt={'2rem'}>
      <ToggleItem hidden={!isOpen}>
        <Fade in={isOpen}>
          {isOpenElement}
        </Fade>
      </ToggleItem>
      <ToggleItem hidden={isOpen}>
        {isCloseElement}
      </ToggleItem>
    </Box>
  )
}

export default Toggle

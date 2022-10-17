import React from 'react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Button, useColorMode } from '@chakra-ui/react'

const ModeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button aria-label='toggle color mode' onClick={toggleColorMode} bg={'transparent'} justifyContent={'flex-end'}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}

export default ModeToggleButton

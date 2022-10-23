import type { AppProps } from 'next/app'

import { useTabIndex, TabIndexContext } from '../hooks/useTabIndex'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import colors from '../theme/colors'
import fonts from '../theme/fonts'
const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      'html, body': {
        color: mode('brand.500', 'brand.200')(props),
        background: mode('white', 'brand.500')(props),
        letterSpacing: '0',
        lineHeight: '1.4rem'
      }
    })
  },
  colors,
  fonts
})

function MyApp({ Component, pageProps }: AppProps) {
  const tabCtx = useTabIndex(-1)
  return (
    <ChakraProvider theme={theme}>
      <TabIndexContext.Provider value={tabCtx}>
        <Component {...pageProps} />
      </TabIndexContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp

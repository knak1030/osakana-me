import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../theme/theme'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="robots" content="noindex" />
        <link rel="icon" type="image/ico" href="/favicon/favicon.svg"/>
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
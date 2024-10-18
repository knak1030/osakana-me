import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '@theme/theme'

export default function Document() {
  return (
    <Html lang='ja'>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex" />
        <meta name="description" content="Here is osakana-me personal page." />
        <link rel="icon" type="image/ico" href="/favicon/favicon.svg"/>
        <meta name="google-site-verification" content="Fzs1qc3bPwLf8svu7-TfI0jdL9hlL4zzUzZPy40_KbA" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
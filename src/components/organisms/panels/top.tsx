import React from 'react'
import { Text, Stack, Box } from "@chakra-ui/react"

const Top = () => {
  return (
    <>
      <Box h={'100%'}>
        <Text fontSize="md">Kanako Osa<br /><br /></Text>
        <Stack spacing={'0'} direction={['column', 'row']} flexWrap={'wrap'} wordBreak={'break-word'} alignItems={'flex-end'} gap={'1rem'} rowGap={'3rem'} pb={'3rem'}>
          <Box minW={'300px'} m={'0'} flex={'1 1 0'}>
            <Text fontSize="sm">
              ---<br />
              私はソフトウェアエンジニアです。<br />
              提案を実現することを専門にしていますが、<br />
              ただ小さな祈りのために働いていたいものです。<br />
              <br />
              EXPERIENCE<br />
              ---<br />
              2018年12月 - 2022年5月<br />
              プログラマおよびSEとしてWEB系システム会社にて勤務<br />
              LPサイトなど静的サイトのコーディングをしたり、社内システムや基幹システムの開発・運用・保守をしていました。ネイティブアプリ向けのAPIの設計も経験があります。<br />
              <br />
              TOOLS / LANGUAGE<br />
              ---<br />
              Next.js(React.js), Vue.js, Typescript, Laravel, CakePHP, CodeIgniter, PHP, AWS, figma, Adobe XD
            </Text>
          </Box>
          <Box minW={'300px'} m={'0'} flex={'1 1 0'}>
            <Text fontSize="sm">
              ---<br />
              I am a software engineer.<br />
              I specialize in the realization of proposals<br />
              but, I&apos;m willing to work for a small prayer.<br />
              <br />
              EXPERIENCE<br />
              ---<br />
              techbeans, Inc. ,Tokyo <br />
              December 2018 - May 2022<br />
              Web Application Development <br />
              As a front-end engineer, I have experience coding static sites such as LP sites and building SPAs. As a full stack engineer, I have experience in development, operation, and maintenance of company&apos;s internal systems and backbone systems. I also have experience designing APIs for mobile applications.
              <br />
              <br />
              TOOLS / LANGUAGE<br />
              ---<br />
              Next.js(React.js), Vue.js, Typescript, Laravel, CakePHP, CodeIgniter, PHP, AWS, figma, Adobe XD
            </Text>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Top

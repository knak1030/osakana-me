import type { NextPage } from 'next'
import { EmailIcon } from '@chakra-ui/icons'
import Layout from './layouts'
import Top from './panels/top'
import CommingSoon from './panels/commingSoon'
import Contact from './panels/contact'

import { Panel } from './interfaces/index'

const Home: NextPage = () => {
  const panels: Panel[] = [
    {
      name: 'hallo',
      element: <Top />
    },
    {
      name: 'blog',
      element: <CommingSoon />
    },
    {
      name: <EmailIcon />,
      element: <CommingSoon />
    }
  ]

  return (
    <>
      <Layout panels={panels} />
    </>
  )
}

export default Home

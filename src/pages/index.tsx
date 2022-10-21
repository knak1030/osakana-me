import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { EmailIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts'
import Top from '../components/panels/top'
import BlogList from '../components/panels/blogList'
import Contact from '../components/panels/contact'
import { getAllBlogPosts } from '../lib/contentful/api'
import { Panel } from '../interfaces/index'
import { IBlogPostFields } from '../@types/generated/contentful'

type Props = {
  posts?: IBlogPostFields[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const preview = false
  const posts = await getAllBlogPosts(preview)
  return {
    props: { posts }
  }
}

const Home: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const panels: Panel[] = [
    {
      name: 'hallo',
      element: <Top />
    },
    {
      name: 'blog',
      element: <BlogList posts={posts} />
    },
    {
      name: <EmailIcon aria-label='contact' />,
      element: <Contact />
    }
  ]

  return (
    <>
      <Head>
        <title>osakana</title>
      </Head>
      <Layout panels={panels} />
    </>
  )
}

export default Home
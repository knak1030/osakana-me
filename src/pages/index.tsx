import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { EmailIcon } from '@chakra-ui/icons'
import Layout from '@components/organisms/layouts'
import Top from '@components/organisms/panels/top'
import BlogList from '@components/organisms/panels/blogList'
import Contact from '@components/organisms/panels/contact'
import { getAllBlogPosts } from '@libs/contentful/api'
import { Panel } from '@interfaces/index'
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
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { IBlogPostFields } from '../../@types/generated/contentful'
import { Panel } from '@interfaces/index'

import Head from 'next/head'
import Layout from '@components/layouts'
import BlogList from '@components/panels/blogList'
import Blog from '@components/panels/blog'
import ToHomeButton from '@components/atoms/ToHomeButton'

import { getBlogPostBySlug, getAllBlogPosts } from '@libs/contentful/api'

type Props = {
  post?: IBlogPostFields
  posts?: IBlogPostFields[]
}

interface Params extends ParsedUrlQuery {
  slug: string,
}

export async function getStaticPaths() {
  try {
    const posts = await getAllBlogPosts(false)
    const paths = posts?.map((post: IBlogPostFields) => ({
      params: { slug: post.slug },
    }))

    return { paths, fallback: false }
  } catch (e) {
    console.log(e)
    return { paths: [], fallback: false }
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const params = context.params!
  const post = await getBlogPostBySlug(params.slug)
  const posts = await getAllBlogPosts(false)

  return { props: { post, posts } }
}

const Post: NextPage = ({ post, posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const panels: Panel[] = [
    {
      name: 'list',
      element: <BlogList posts={posts} panelTarget={1} />
    },
    {
      name: 'blog',
      element: <Blog post={post} />
    }
  ]
  return (
    <>
      <Head>
        <title>osakana</title>
      </Head>
      <ToHomeButton />
      <Layout panels={panels} defaultIndex={1} />
    </>
  )
}

export default Post
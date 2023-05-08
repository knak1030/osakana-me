import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { IBlogPostFields } from '../../@types/generated/contentful'
import { Panel } from '@interfaces/index'

import Head from 'next/head'
import Layout from '@components/organisms/layouts'
import BlogList from '@components/organisms/panels/blogList'
import Blog from '@components/organisms/panels/blog'
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
    const paths = posts?.map((post: IBlogPostFields) => ([
      { params: { slug: post.slug }, locale: 'ja' },
      { params: { slug: post.slug }, locale: 'en' }      
    ]))

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
  return (
    <>
      <Blog post={post} />
    </>
  )
}

export default Post
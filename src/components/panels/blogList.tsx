import React from 'react'
import { BlogList } from '../../interfaces/index'

type Props = {
  posts?: BlogList
}

const BlogList = ({ posts }: Props) => {
  return (
    <>
      <ul>
        {
          posts?.map((item, index) => (
            <li key={index}>
              {item.title} | {item.createdAt}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default BlogList

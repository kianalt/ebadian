/* eslint-disable react/no-array-index-key */
import React from 'react'
// Componenet
import CommonLayout from 'layouts/CommonLayout'

import BlogDetails from 'Component/Blog.js/BlogDetails'
import { useRouter } from 'next/router'
// Api
import api from 'utils/api'

export async function getStaticPaths() {
  const blogList = await api
    .getBlogList({ urlParams: { blogType: 'blog' } })
    .then(res => res.data)
  const blogEnList = await api
    .getBlogList({ urlParams: { blogType: 'blog-en' } })
    .then(res => res.data)
  const paths = [
    ...blogList.map(blog => ({
      params: {
        slug: blog.slug,
      },
      locale: 'fa',
    })),
    ...blogEnList.map(blog => ({
      params: {
        slug: blog.slug,
      },
      locale: 'en',
    })),
  ]
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params, locale }) {
  const blog = await api
    .getBlogBySlug({
      urlParams: {
        blogType: locale === 'fa' ? 'blog' : 'blog-en',
        slug: encodeURI(params.slug),
      },
    })
    .then(res => res.data)
  return {
    props: {
      blog,
    },
    revalidate: 10,
  }
}
const BlogDetail = ({ blog }) => {
  const router = useRouter()
  return (
    <CommonLayout
      title={router.locale === 'fa' ? 'وبلاگ' : 'Blog'}
      parent={router.locale === 'fa' ? 'خانه' : 'Home'}
      parentRoute="/"
      mobileImage="/mobilebefor.png"
      desktopImage="/desktopbefor.png"
      subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    >
      <div className="blogPage container">
        <BlogDetails blog={blog} />
      </div>
    </CommonLayout>
  )
}
export default BlogDetail

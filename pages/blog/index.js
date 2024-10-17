/* eslint-disable react/no-array-index-key */
import React from 'react'
// Componenet
import CommonLayout from 'layouts/CommonLayout'
import BlogContent from 'Component/Blog.js/BlogContent'
// Api
import api from 'utils/api'

import { useRouter } from 'next/router'

export async function getStaticProps({ locale }) {
  const blogList = await api
    .getBlogList({
      urlParams: { blogType: locale === 'fa' ? 'blog' : 'blog-en' },
    })
    .then(res => res.data)
  const blogCategoryList = await api
    .getBlogCategoryList({
      urlParams: { blogType: locale === 'fa' ? 'blog' : 'blog-en' },
    })
    .then(res => res.data)
  return {
    props: {
      blogList: blogList || [],
      blogCategoryList: blogCategoryList || [],
    },
    revalidate: 10,
  }
}

const Blog = ({ blogList, blogCategoryList }) => {
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
        <BlogContent blogList={blogList} BlogCategoryList={blogCategoryList} />
      </div>
    </CommonLayout>
  )
}
export default Blog

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'
// Utils
import jMoment from 'utils/jMoment'

const BlogContent = ({ blogList }) => {
  const router = useRouter()
  const handleClick = addres => {
    // Navigate to the desired route
    router.push(`/blog/${addres}`)
  }

  const [imageSrc, setImageSrc] = useState('/Arrow.png')
  return (
    <div className="row">
      <div className="col-lg-8 col-md-8 col-sm-12">
        <div className="blog-content">
          {blogList.map(blog => (
            <div className="blogconent-conatiner" key={blog._id}>
              <div
                onClick={() => handleClick(blog.slug)}
                style={{ coursor: 'pointer' }}
              >
                <div className="blog-image-conatiner">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_ORIGIN}${blog.featuredImage}/1200x1200`}
                    layout="fill"
                  />
                  <div className="admin">
                    <Image src="/blog/calendar.png" width={17} height={16} />
                    <span>
                      {router.locale === 'fa'
                        ? jMoment(blog?.insertDate).format('jDD jMMMM jYYYY')
                        : blog?.insertDate.slice(0, 10)}
                    </span>

                    <div className="right-line" />
                    <Image src="/blog/tag.png" width={17} height={16} />
                    <span>{blog.blogCategory.title}</span>
                    <div className="right-line" />
                    <Image src="/blog/user.png" width={17} height={16} />
                    <span>
                      {router.locale === 'fa' ? ' مدیر سایت' : 'Admin'}
                    </span>
                  </div>
                </div>
                <h6>{blog.title}</h6>
                <div className="blog-title-line" />
                <p>{blog.brief}</p>
                <Link
                  href={`/blog/${blog.slug}`}
                  onMouseEnter={() => setImageSrc('/rightArrow.png')}
                  onMouseLeave={() => setImageSrc('/Arrow.png')}
                >
                  {router.locale === 'fa' ? 'بیشتر بخوانید' : 'Read More'}{' '}
                  <Image
                    src={imageSrc}
                    width={24}
                    height={8}
                    className="ml-3"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 pl-lg-5 pl-sm-">
        <div className="catgoryContainer">
          <div className="titleBox">
            <div className="line" />
            <h6>{router.locale === 'fa' ? 'مقالات دیگر' : 'Other Articles'}</h6>
          </div>
          {blogList.map(blog => (
            <div
              className="categoryconent-conatiner"
              key={blog._id}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_ORIGIN}${blog.featuredImage}/450x450`}
                width={116}
                height={96}
                style={{
                  borderRadius: '10px',
                  marginTop: '-12px',
                }}
              />

              <div className="categoryconent-conatiner-context">
                <div className="calender" style={{ display: 'flex' }}>
                  <Image src="/blog/calendar.png" width={16} height={18} />{' '}
                  <h6 className="ml-2">
                    {router.locale === 'fa'
                      ? jMoment(blog?.insertDate).format('jDD jMMMM jYYYY')
                      : blog?.insertDate.slice(0, 10)}
                  </h6>
                </div>
                <p>{blog.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default BlogContent

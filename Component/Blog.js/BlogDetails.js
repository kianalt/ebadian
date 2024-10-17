/* eslint-disable react/no-array-index-key */
import Image from 'next/image'
import React from 'react'
// import moment from 'moment'
import { useRouter } from 'next/router'
import jMoment from 'utils/jMoment'
import Comment from './Comment'
import CommentForm from './CommentForm'
// Utils

const BlogDetails = ({ blog }) => {
  const router = useRouter()
  return (
    <div className="row">
      <div className="col-lg-8 col-md-8 col-sm-12">
        <div className="blog-content">
          <div className="blogconent-conatiner">
            <div className="blog-image-conatiner">
              <Image
                src={`${process.env.NEXT_PUBLIC_ORIGIN}${blog?.featuredImage}/450x450`}
                layout="fill"
                style={{ objectFit: 'cover', borderRight: '15px' }}
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
                <span>{blog?.blogCategory.title}</span>
                <div className="right-line" />
                <Image src="/blog/user.png" width={17} height={16} />
                <span>{router.locale === 'fa' ? ' مدیر سایت' : 'Admin'}</span>
              </div>
            </div>
            <h6>{blog?.title}</h6>
            <div className="blog-title-line" />
            <div
              dangerouslySetInnerHTML={{
                __html: blog?.description,
              }}
              style={{
                textAlign: 'justify',
              }}
            />
          </div>
        </div>

        <div>
          <a
            href="whatsapp://send?text=http://www/article.bc?lid=1&id=2299691"
            className="share"
          >
            <Image src="/share-2.png" width={25} height={25} />
            {router.locale === 'fa' ? (
              <p className="ml-3">اشتراک گذاری مقاله</p>
            ) : (
              <p className="ml-3">Share This Article</p>
            )}
          </a>
        </div>
        <Comment blog={blog} />
        <CommentForm blogId={blog?._id} />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 ml-lg-3 ml-sm-0">
        <div className="catgoryContainer">
          <div className="titleBox">
            <div className="line" />
            <h6>{router.locale === 'fa' ? 'مقالات دیگر' : 'Other Articles'}</h6>
          </div>
          {blog?.suggestedBlogs.map((catgory, index) => (
            <div className="categoryconent-conatiner" key={index}>
              <div className=" m-16">
                <Image
                  src={`${process.env.NEXT_PUBLIC_ORIGIN}${catgory.featuredImage}/450x450`}
                  width={116}
                  height={96}
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
              </div>
              <div className="categoryconent-conatiner-context">
                <div className="calender">
                  <Image src="/blog/calendar.png" width={16} height={16} />
                  <span>
                    {router.locale === 'fa'
                      ? jMoment(blog?.insertDate).format('jDD jMMMM jYYYY')
                      : blog?.insertDate.slice(0, 10)}
                  </span>
                </div>

                <p>{catgory.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default BlogDetails

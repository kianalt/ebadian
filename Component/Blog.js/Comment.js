/* eslint-disable react/button-has-type */
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Comment = ({ blog }) => {
  const router = useRouter()
  return (
    <div className="Comment">
      {(!blog?.comments || blog?.comments.length === 0) && (
        <p style={{ color: '#fff' }}>
          {router.locale === 'fa'
            ? 'هنوز نظری وجود ندارد. اولین نفری باشید که نظر می‌دهد!'
            : 'No comments yet. Be the first to comment!'}
        </p>
      )}
      {blog?.comments && (
        <h6>{router.locale === 'fa' ? 'نظرات شما' : 'Your Comments'}</h6>
      )}
      {blog?.comments &&
        blog?.comments.map(comment => (
          <li className="comment" key={comment._id}>
            <div className="comment-content">
              <div className="comment-content-image">
                <img src="/usericon.png" />
              </div>
              <div className="comment-contex">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <h6>{comment.name}</h6>
                  </div>
                </div>
                <p>{comment.message}</p>
              </div>
            </div>
            {comment.reply && (
              <div className="reply-content">
                <Image src="/Reply.png" width={28} height={30} />
                <div className="main-reply">
                  <div className="comment-content-image">
                    <img src="/usericon.png" />
                  </div>
                  <div className="comment-contex">
                    <div>
                      <div>
                        <h6>{comment.repliedBy.name}</h6>
                      </div>
                    </div>
                    <p>{comment.reply}</p>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
    </div>
  )
}
export default Comment

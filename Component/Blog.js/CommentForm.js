import React, { useState } from 'react'
// Api
import api from 'utils/api'
import ResponseAlert from 'Component/ResponseAlert/ResponseAlert'
import Image from 'next/image'
import { useRouter } from 'next/router'

const CommentForm = ({ blogId }) => {
  const [imageSrc, setImageSrc] = useState('/Arrow.png')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(null)
  const [serverResponseType, setServerResponseType] = useState(null)
  const [serverResponse, setServerResponse] = useState(null)
  const router = useRouter()
  const handleSubmit = async event => {
    event.preventDefault()
    await api
      .postComment({
        data: { name, email, message, blogId },
      })
      .then(() => {
        setServerResponseType('success')
        setServerResponse(
          router.locale === 'fa'
            ? 'دیدگاه شما با موفقیت ثبت شد.'
            : 'Your comment has been successfully submitted.',
        )
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch(err => {
        if (err.response && err.response.data) {
          setServerResponseType('danger')
          setServerResponse(err.response.data.message)
        }
      })
      .then(() => {
        setIsLoading(null)
      })
  }
  return (
    <div className="commentform">
      <h6>
        {router.locale === 'fa' ? 'نظر خود را بگذارید' : 'Leave Your Comment'}
      </h6>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              className="name"
              placeholder={router.locale === 'fa' ? 'نام شما' : 'Your Name'}
              type="name"
              value={name}
              required
              onChange={event => {
                setName(event.target.value)
              }}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              className="phone"
              placeholder={router.locale === 'fa' ? 'تلفن شما' : 'Your Phone'}
              type="text"
              value={phone}
              required
              onChange={event => {
                setPhone(event.target.value)
              }}
            />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 mt-lg-5 mt-md-0">
            <input
              className="EMAIL"
              placeholder={router.locale === 'fa' ? 'ایمیل شما' : 'Your Email'}
              type="email"
              value={email}
              required
              onChange={event => {
                setEmail(event.target.value)
              }}
            />
          </div>
          <div className="col-lg-12">
            <textarea
              type="message"
              name="message"
              value={message}
              required
              placeholder={
                router.locale === 'fa'
                  ? 'نظر خود را اینجا بنویسید ...'
                  : 'Write Your Comment Here ...'
              }
              onChange={event => {
                setMessage(event.target.value)
              }}
            />
          </div>
          <div className="col-sm-12 mt-2">
            <button
              onMouseEnter={() => setImageSrc('/rightArrow.png')}
              onMouseLeave={() => setImageSrc('/Arrow.png')}
              type="submit"
              className="submit-button"
              disabled={isLoading}
            >
              {router.locale === 'fa' ? 'ارسال پیام' : 'Send Message'}
              <Image src={imageSrc} width={35} height={13} className="ml-3" />
            </button>
          </div>
          <div className="col-sm-12 mt-2">
            <ResponseAlert type={serverResponseType} text={serverResponse} />
          </div>
        </div>
      </form>
    </div>
  )
}
export default CommentForm

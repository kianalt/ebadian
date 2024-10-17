import Title from 'Component/Tile/Title'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
// Api
import api from 'utils/api'
import ResponseAlert from 'Component/ResponseAlert/ResponseAlert'

const HomeContact = () => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(null)
  const [serverResponseType, setServerResponseType] = useState(null)
  const [serverResponse, setServerResponse] = useState(null)
  const router = useRouter()
  const handleSubmit = async event => {
    event.preventDefault()
    await api
      .postForm({
        urlParams: { formType: 'contact' },
        data: { name, email, message },
      })
      .then(() => {
        setServerResponseType('success')
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
    <div className="HomeContact container">
      <div className="HomeContact-container">
        <Title
          title={
            router.locale === 'fa'
              ? 'با ما تماس بگیرید'
              : 'GET IN TOUCH WITH ME'
          }
        />
        <div className="row contact-container">
          <div className="col-lg-2  col-md-6 col-md-6 contact-Image-1">
            <Image src="/contact2.png" layout="fill" />
            <div className="shadow" />
          </div>
          <div className="col-lg-8  col-md-12 col-sm-12 contact-info">
            <div className="contact-info-container">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="input-title">
                      {router.locale === 'fa' ? (
                        <p>نام و نام خانوادگی</p>
                      ) : (
                        <p>FULL NAME </p>
                      )}
                      <span className="red">*</span>
                    </div>
                    <input
                      className="name"
                      placeholder={
                        router.locale === 'fa'
                          ? 'نام و نام خانوادگی'
                          : 'Your Full Name'
                      }
                      type="name"
                      value={name}
                      required
                      onChange={event => {
                        setName(event.target.value)
                      }}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="input-title"
                      style={{ display: 'flex', alignItems: 'flex-start' }}
                    >
                      {router.locale === 'fa' ? <p>تلفن تماس</p> : <p>PHONE</p>}
                      <span className="red">*</span>
                    </div>
                    <input
                      className="phone"
                      placeholder={
                        router.locale === 'fa'
                          ? ' تلفن تماس'
                          : 'Your phone number'
                      }
                      type="text"
                      value={phoneNumber}
                      required
                      onChange={event => {
                        setPhoneNumber(event.target.value)
                      }}
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="input-title">
                      {router.locale === 'fa' ? (
                        <p>آدرس ایمیل شما</p>
                      ) : (
                        <p>EMAIL</p>
                      )}
                      <span className="red">*</span>
                    </div>
                    <input
                      className="EMAIL"
                      placeholder={
                        router.locale === 'fa'
                          ? 'آدرس ایمیل شما '
                          : 'Your email adress'
                      }
                      type="email"
                      value={email}
                      required
                      onChange={event => {
                        setEmail(event.target.value)
                      }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <div className="input-title">
                      {router.locale === 'fa' ? <p>پیام</p> : <p>MESSAGE</p>}
                    </div>
                    <textarea
                      type="message"
                      name="message"
                      value={message}
                      required
                      placeholder={
                        router.locale === 'fa'
                          ? 'پیام خود را اینجا بنویسید ...'
                          : 'Write your message here ...'
                      }
                      onChange={event => {
                        setMessage(event.target.value)
                      }}
                    />
                  </div>
                  <div className="col-sm-12 mt-2 mb-sm-5">
                    <button
                      type="submit"
                      className="submit-button"
                      disabled={isLoading}
                    >
                      {router.locale === 'fa' ? (
                        <span>ارسال پیام</span>
                      ) : (
                        <span>Submit Message</span>
                      )}
                    </button>
                  </div>{' '}
                  <div className="col-sm-12 mt-2">
                    <ResponseAlert
                      type={serverResponseType}
                      text={serverResponse}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-2  col-md-6 col-sm-6 contact-Image-2">
            <Image src="/contact1.png" layout="fill" />
            <div className="shadow" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeContact

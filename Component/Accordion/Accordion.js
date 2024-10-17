/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const linkPattern = /(\[[^\[\]]+\]\(([^\(\)]+)\))/g
const titlePattern = /(^\[[^\[\]]+\])/g
const urlPattern = /(\(([^\(\)]+)\)$)/g

const Accordion = ({ faqList, setSelectService }) => {
  const [open, setOpen] = useState(0)
  const router = useRouter()
  const handleButtonClick = index => {
    setOpen(open === index ? null : index)
    setSelectService(index)
  }

  return (
    <div className="dlab-accordion" id="accordionFaq">
      {faqList.map((faq, index) => {
        let answer = faq?.values.description

        if (linkPattern.test(answer)) {
          const rawLink = answer.match(linkPattern)[0]
          const linkTitle = rawLink.match(titlePattern)[0].replace(/\[|\]/g, '')
          const linkUrl = rawLink.match(urlPattern)[0].replace(/\(|\)/g, '')
          answer = answer.replace(
            linkPattern,
            `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer">${linkTitle}</a>`,
          )
        }
        return (
          <div
            className={`card ${open === index ? 'show' : 'minimize'}`}
            key={faq._id}
          >
            <div
              role="button"
              tabIndex={0}
              className="overlay"
              onClick={() => handleButtonClick(index)}
              onKeyDown={() => setOpen(open === index ? null : index)}
            />
            <div
              role="button"
              tabIndex={0}
              className="card-header"
              onClick={() => handleButtonClick(index)}
              onKeyDown={() => setOpen(open === index ? null : index)}
            >
              <h5 className="dlab-title">
                <a
                  role="button"
                  tabIndex={0}
                  className={`${open === index ? '' : 'collapsed'}`}
                  onClick={() => setOpen(open === index ? null : index)}
                  onKeyDown={() => setOpen(open === index ? null : index)}
                >
                  {faq?.values.title}
                </a>
                {open === index ? (
                  <Image
                    src="/mines.png"
                    width={24}
                    height={24}
                    alt="plus"
                    layout="fixed"
                  />
                ) : (
                  <Image
                    src="/plus.png"
                    width={24}
                    height={24}
                    alt="plus"
                    layout="fixed"
                  />
                )}
              </h5>
              <div
                className={`card-body ${
                  open === index ? ' show' : 'collapsed'
                }`}
              >
                <div
                  className="m-b0"
                  dangerouslySetInnerHTML={{
                    __html: faq.values.description,
                  }}
                />
                {router.locale === 'fa' ? (
                  <div className="details">
                    <div className="details-desction">
                      <p>{faq?.values.title}</p>
                    </div>
                    <div className="details-desction">
                      <p>نوع درمان : {faq?.values.treatment}</p>
                    </div>
                    <div className="details-desction">
                      <p>تعداد واحدها : {faq?.values.units}</p>
                    </div>
                    <div className="details-desction">
                      <p>رنگ: {faq?.values.color}</p>
                    </div>
                  </div>
                ) : (
                  <div className="details">
                    <div className="details-desction">
                      <p>{faq?.values.title}</p>
                    </div>
                    <div className="details-desction">
                      <p>Treatment : {faq?.values.treatment}</p>
                    </div>
                    <div className="details-desction">
                      <p>Number of units : {faq?.values.units}</p>
                    </div>
                    <div className="details-desction">
                      <p>Color : {faq?.values.color}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* <div
                role="button"
                tabIndex={0}
                className={`${open === index ? 'collapsed show' : 'collapsed'}`}
                onClick={() => setOpen(open === index ? null : index)}
                onKeyDown={() => setOpen(open === index ? null : index)}
              >
                <div className="card-body">
                  <p
                    className="m-b0"
                    dangerouslySetInnerHTML={{
                      __html: answer,
                    }}
                  />
                </div>
              </div> */}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion

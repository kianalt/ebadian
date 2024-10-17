/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

const CaseList = ({ casesList }) => {
  const [imageSrc, setImageSrc] = useState('/Arrow.png')
  const router = useRouter()
  return (
    <div className="container  casesList-container">
      <div className="row">
        {casesList.map((cases, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
            <div className="cases">
              <div className="cases-container">
                <Link href={`/cases/${cases.values.slug}`}>
                  <div>
                    <div className="case-card">
                      <Image
                      src={`${process.env.NEXT_PUBLIC_ORIGIN}${cases?.values.image}/650x650`}
                        layout="fill"
                      />
                    </div>
                    <h3>{cases?.values.title}</h3>
                    <p>{cases?.values.brief}</p>
                    <button
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
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default CaseList

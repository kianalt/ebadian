import Accordion from 'Component/Accordion/Accordion'
import Title from 'Component/Tile/Title'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import BeforeAfterImage from './BeforAftrImage'

const BeforAfter2 = ({ beforeAfterList }) => {
  const router = useRouter()
  const [imageSrc, setImageSrc] = useState('/rightArrow.png')
  const [selectService, setSelectService] = useState(0)

  return (
    <div className="BeforAfterContainer container ">
      <Title title={router.locale === 'fa' ? 'قبل و بعد' : 'BEFORE & AFTER'} />

      <div className="row BeforAfterContainerFlex ">
        <div className="col-lg-6 col-md-12 col-sm-12 beforafter__accardeon p-5">
          <Accordion
            faqList={beforeAfterList}
            setSelectService={setSelectService}
          />
          <br />
          <Link href="/beforafter">
            <div
              className="see-more-button"
              onMouseEnter={() => setImageSrc('/Arrow.png')}
              onMouseLeave={() => setImageSrc('/rightArrow.png')}
            >
              <span className="mr-4 ml-4">
                {router.locale === 'fa' ? ' مشاهده بیشتر' : 'See More'}
              </span>

              <Image width="20" height="8" src={imageSrc} />
            </div>
          </Link>
        </div>
        <div className=" col-lg-6 col-md-12 col-sm-12 beforafter__image p-5">
          <BeforeAfterImage
            beforeAfterList={beforeAfterList}
            selectService={selectService}
          />
        </div>
      </div>
    </div>
  )
}
export default BeforAfter2

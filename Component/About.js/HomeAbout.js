/* eslint-disable react/no-array-index-key */
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useState } from 'react'

const HomeAbout = () => {
  const router = useRouter()
  const [imageSrc, setImageSrc] = useState('/rightArrow.png')

  return (
    <div className="HomeAbout container">
      <div className="HomeAbout-container">
        <div className="row" style={{ height: '100%' }}>
          <div className="col-lg-5 col-md-4 col-sm-12 HomeAbout-image">
            {router.locale === 'fa' ? (
              <Image src="Picabout.png" layout="fill" />
            ) : (
              <Image src="Picabout.png" layout="fill" />
            )}
          </div>
          <div className="col-lg-7 col-md-8 col-sm-12 HomeAbout-text">
            {router.locale === 'fa' ? <h3>درباره ما</h3> : <h3>About</h3>}
            {router.locale === 'fa' ? (
              <h6>دکتر محمدتقی عبادیان</h6>
            ) : (
              <h6>Dr. Mohammad Taghi Ebadian</h6>
            )}
            {router.locale === 'fa' ? (
              <>
                {' '}
                <p>
                  دکتر محمد تقی عبادیان یکی از جراحان و دندانپزشکان برجسته با
                  بیش از 20 سال سابقه کاری در زمینه دندانپزشکی و ایمپلنت‌های
                  دندانی است. او دارای مدرک مستر در ایمپلنت‌های دندانی از
                  دانشگاه مونستر آلمان می‌باشد. تخصص او در زمینه ایمپلنت‌های
                  دندانی، دندانپزشکی زیبایی و جراحی‌های دهان و دندان است. دکتر
                  عبادیان با بهره‌گیری از تکنولوژی‌های پیشرفته و روش‌های نوین
                  درمانی، خدمات متنوعی ارائه می‌دهد که شامل جراحی‌های دندان،
                  ترمیم و زیباسازی دندان‌ها، و مشاوره‌های تخصصی در زمینه بهداشت
                  دهان و دندان می‌شود.
                </p>
              </>
            ) : (
              <p>
                Dr. Ebadian Dental Clinic, with over 20 years of experience, is
                committed to providing exceptional dental care. Our clinic
                prides itself on employing highly skilled specialists and staff
                to deliver the best therapeutic methods. We focus on modern,
                advanced techniques while maintaining a proper therapeutic
                culture and the right attitude towards treatment.
                Patient-Centered Approach Our patient-centered approach
                emphasizes the importance of communication. We ensure that
                patients fully understand their medical conditions and the
                available treatment options. This clarity helps set reasonable
                expectations and enables patients to participate actively in
                their treatment plans. Teamwork and Communication Teamwork is at
                the core of our practice. Our specialists collaborate closely,
                ensuring comprehensive and coordinated care. This approach
                enhances the quality of our treatments and ensures all aspects
                of patient care are considered. For more information and to
                connect with Dr. Ebadian, please visit various websites and
                resources that provide details about his work.
              </p>
            )}
            <div className="HomeAbout-button">
              {router.locale === 'fa' ? (
                <div className="exprience">۲۰ سال تجربه</div>
              ) : (
                <div className="exprience">20 years of experience</div>
              )}
              <Link
                href="/about"
                onMouseEnter={() => setImageSrc('/Arrow.png')}
                onMouseLeave={() => setImageSrc('/rightArrow.png')}
              >
                {router.locale === 'fa' ? (
                  <span className="ml-3">بیشتر بخوانید</span>
                ) : (
                  <span className="ml-3">Read More</span>
                )}

                <Image src={imageSrc} width={24} height={8} className="ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeAbout

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HomeBanner = () => {
  const [mobileSrc, setMobileSrc] = useState(false)
  const [desktopSrc, setdesktopSrc] = useState(false)
  const [imageSrc, setImageSrc] = useState(desktopSrc)
  const router = useRouter()

  const handleButtonClick = () => {
    router.push('/contact')
  }
  useEffect(() => {
    const updateImageSrc = () => {
      const screenWidth = window.innerWidth
      if (screenWidth < 900) {
        if (router.locale === 'fa') {
          setImageSrc('/rtl.png')
          setMobileSrc(true)
          setdesktopSrc(false)
        } else {
          setImageSrc('/pic1back.png')
          setMobileSrc(true)
          setdesktopSrc(false)
        }
      } else if (router.locale === 'fa') {
        setImageSrc('/rtl.png')
        setMobileSrc(false)
        setdesktopSrc(true)
      } else {
        setImageSrc('/pic1back.png')
        setMobileSrc(false)
        setdesktopSrc(true)
      }
    }

    // Set initial image source
    updateImageSrc()

    // Update image source on resize
    window.addEventListener('resize', updateImageSrc)

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', updateImageSrc)
  }, [])
  return (
    <div className="homeBanner">
      <div className="homeBanner-container mb-4">
        <div className="left-side">
          <div className="banner-description">
            <div className="banner-title">
              {router.locale === 'fa' ? (
                <h1>آغاز یک زندگی بهتر با لبخندی زیبا و درخشان</h1>
              ) : (
                <h1> A Better Life Start With Beautiful Smile</h1>
              )}
              <Image
                src="/smile.png"
                alt="Smiling Face Icon"
                width={114}
                height={63}
              />
            </div>
            {router.locale === 'fa' ? (
              <p>
                به دنیای لبخندها خوش آمدید: جایی که زندگی‌های بهتر آغاز می‌شوند
              </p>
            ) : (
              <p>Welcome to a World of Smiles: Where Better Lives Begin</p>
            )}
          </div>
          <div className="button-group">
            <button type="button" onClick={handleButtonClick}>
              <Image src="/tooth.png" width={16} height={15} />
              {router.locale === 'fa' ? (
                <span>امروز مراقبت را شروع کنید</span>
              ) : (
                <span>Start Care Today</span>
              )}
            </button>
            <Link href="/about">
              {' '}
              {router.locale === 'fa' ? (
                <span> بیشتر بدانید</span>
              ) : (
                <span>Discover More</span>
              )}
            </Link>
          </div>
          <div className="banner-testimonials">
            <div className="number">
              {router.locale === 'fa' ? (
                <span>+۱۴۵ ویزیت روزانه</span>
              ) : (
                <span>+ 145 K</span>
              )}
            </div>
            <div className="testimonials-description">
              {router.locale === 'fa' ? (
                <p>
                  ما مورد اعتماد تعداد زیادی از بازدیدکنندگان خوشحال و راضی در
                  کلینیک خود هستیم.
                </p>
              ) : (
                <p>
                  We are trusted by so many happy and satisfied visitors in our
                  clinic.
                </p>
              )}

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <img
                  className="mr-4"
                  src="Pics.png"
                  style={{ width: '180px', objectFit: 'contain' }}
                />
                <Link href="#testimonials">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    className="option"
                  >
                    {router.locale === 'fa' ? (
                      <p>نظرات بیشتر</p>
                    ) : (
                      <p>More Opinions</p>
                    )}
                    <img
                      className="mb-2 ml-4"
                      src="rightArrow.png"
                      style={{ width: '24px' }}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="backgroundImage">
          {desktopSrc && <img src={imageSrc} layout="fill" />}
          {mobileSrc && <img src={imageSrc} layout="fill" />}
          <div className="banner-cta" style={{ cursor: 'pointer' }}>
            {router.locale === 'fa' ? (
              <Link href="/about">درباره‌ی دکتر عبادیان</Link>
            ) : (
              <Link href="/about">About Dr.Ebadian</Link>
            )}
            <svg
              width="24"
              height="9"
              viewBox="0 0 24 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.47998 5.21325H21.4013L18.3806 8.2283L19.0593 8.90577L23.2387 4.73414L19.0593 0.5625L18.3806 1.23997L21.4013 4.25502H0.47998V5.21325Z"
                fill="#F1F1F1"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner

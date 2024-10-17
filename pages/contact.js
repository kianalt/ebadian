/* eslint-disable react/no-array-index-key */
import React from 'react'
// Componenet
import CommonLayout from 'layouts/CommonLayout'
import HomeContact from 'Component/Contact/HomeContact'
import Image from 'next/image'
import Title from 'Component/Tile/Title'
import { useRouter } from 'next/router'

const Contact = () => {
  const router = useRouter()
  return (
    <div className="services">
      <CommonLayout
        title={router.locale === 'fa' ? 'تماس' : 'Contact'}
        parent={router.locale === 'fa' ? 'خانه' : 'Home'}
        parentRoute="/"
        mobileImage="/services.png"
        desktopImage="/services.png"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      >
        <HomeContact />
        <div className="mt-lg-5 mt-sm-0  pt-4">
          <Title
            title={
              router.locale === 'fa'
                ? 'ما را در شبکه‌های اجتماعی دنبال کنید'
                : 'Follow me on Socials'
            }
            subTitle={
              router.locale === 'fa'
                ? 'برای آخرین اخبار و نکات مفید دندانپزشکی، ما را در شبکه‌های اجتماعی دنبال کنید.'
                : 'Stay connected with me on social media for the latest updates and valuable insights.'
            }
          />
        </div>
        <div
          className="treatment-container container"
          style={{ marginTop: '-50px' }}
        >
          <div className="iconContainer">
            {[
              {
                icon: '/linkedin.png',
                title: router.locale === 'fa' ? 'لینکدین' : 'LinkedIn',
                Link: 'https://www.linkedin.com/company/drebadian',
              },
              {
                icon: '/Instagram.png',
                title: router.locale === 'fa' ? 'اینستاگرام' : 'Instagram',
                Link: 'https://www.instagram.com/drebadian',
              },
              {
                icon: '/Xapp.png',
                title: router.locale === 'fa' ? 'ایکس' : 'X',
              },
            ].map((item, index) => (
              <div key={index} className="iconItem">
                <a href={item.Link}>
                  <div className="iconImage headerIcon">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3>{item.title}</h3>
                </a>{' '}
              </div>
            ))}
          </div>
        </div>
      </CommonLayout>
    </div>
  )
}
export default Contact

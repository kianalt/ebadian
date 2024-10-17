import Title from 'Component/Tile/Title'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const Services = ({ noTitle, serviceList }) => {
  const router = useRouter()
  return (
    // useEffect(() => {
    //   const handleCheckMenuWithScroll = () => {
    //     let finalMenuId = 'introduce'
    //     const elem1 = document.getElementById('introduce')
    //     const elemRect1 = elem1.getBoundingClientRect()
    //     if (elemRect1.top < window.innerHeight - 100) {
    //       finalMenuId = 'introduce'
    //     }
    //     const elem2 = document.getElementById('about')
    //     const elemRect2 = elem2.getBoundingClientRect()
    //     if (elemRect2.top < window.innerHeight - 100) {
    //       finalMenuId = 'about'
    //     }
    //     const elem3 = document.getElementById('resume')
    //     const elemRect3 = elem3.getBoundingClientRect()
    //     if (elemRect3.top < window.innerHeight - 100) {
    //       finalMenuId = 'resume'
    //     }
    //     const elem4 = document.getElementById('services')
    //     const elemRect4 = elem4.getBoundingClientRect()
    //     if (elemRect4.top < window.innerHeight - 100) {
    //       finalMenuId = 'services'
    //     }
    //     const elem5 = document.getElementById('skills')
    //     const elemRect5 = elem5.getBoundingClientRect()
    //     if (elemRect5.top < window.innerHeight - 100) {
    //       finalMenuId = 'skills'
    //     }
    //     const elem6 = document.getElementById('gallery')
    //     const elemRect6 = elem6.getBoundingClientRect()
    //     if (elemRect6.top < window.innerHeight - 100) {
    //       finalMenuId = 'gallery'
    //     }
    //     const elem7 = document.getElementById('contact')
    //     const elemRect7 = elem7.getBoundingClientRect()
    //     if (elemRect7.top < window.innerHeight - 100) {
    //       finalMenuId = 'contact'
    //     }

    //     setSelectedMenuId(finalMenuId)
    //   }

    //   window.addEventListener('scroll', handleCheckMenuWithScroll)
    //   handleCheckMenuWithScroll()

    //   return () => {
    //     if (handleCheckMenuWithScroll) {
    //       window.removeEventListener('scroll', handleCheckMenuWithScroll)
    //     }
    //   }
    // }, [])
    <div className="Service-container container">
      {!noTitle && (
        <Title
          title={
            router.locale === 'fa' ? 'خدمات دندانپزشکی' : 'Dental Services'
          }
        />
      )}
      <div className="row services-context-container">
        {serviceList.map(service => (
          <div
            className="col-lg-4 col-md-6 col-sm-12 services-context"
            key={service?._id}
          >
            <Link href={`/services/${service?.values.slug}`}>
              <div className="overlay" />
              <h4>{service?.values.title}</h4>
              <div className="image-container">
                <Image
                  src={`${process.env.NEXT_PUBLIC_ORIGIN}${service?.values.homeImage}/650x650`}
                  layout="fill"
                />
              </div>

              <div className="service-details">
                <div className="overlay-detail">
                  <h6>{service?.values.title}</h6>
                  <p>{service?.values.brief}</p>
                  {router.locale === 'fa' ? 'بیشتر بخوانید' : 'Read More'}
                  <Image
                    className="ml-2"
                    src="/blueArrow.png"
                    width="22"
                    height="8"
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Services

import React from 'react'
// Next
import { useRouter } from 'next/router'
// Componenet
import CommonLayout from 'layouts/CommonLayout'
import HomeBanner from 'Component/HomeBanner/HomeBanner'
import BeforAfter2 from 'Component/BeforAfterSection/BeforAfter2'
import Services from 'Component/Services/Services'
import TestiMonials from 'Component/Testimonials/TestiMonials'
import HomeAbout from 'Component/About.js/HomeAbout'
import HomeContact from 'Component/Contact/HomeContact'
import api from 'utils/api'

export async function getStaticProps({ locale }) {
  const testimonialsList = await api
    .getContentList({
      urlParams: {
        contentType: locale === 'fa' ? 'testimonial' : 'testimonial-en',
      },
    })
    .then(res => res.data)
  const beforeAfterList = await api
    .getContentList({
      urlParams: {
        contentType: locale === 'fa' ? 'beforeAfter' : 'beforeAfter-en',
      },
      params: { isFeatured: true },
    })
    .then(res => res.data)
  const serviceList = await api
    .getContentList({
      urlParams: { contentType: locale === 'fa' ? 'service' : 'service-en' },
    })
    .then(res => res.data)

  return {
    props: {
      beforeAfterList: beforeAfterList || [],
      testimonialsList: testimonialsList || [],
      serviceList: serviceList || [],
    },
    revalidate: 10,
  }
}
const Index = ({ testimonialsList, beforeAfterList, serviceList }) => {
  const router = useRouter()
  return (
    <CommonLayout
      title={router.locale === 'fa' ? 'صفحه اصلی' : 'Home'}
      noBreadcrumb
    >
      <HomeBanner />
      <BeforAfter2 beforeAfterList={beforeAfterList} />
      <Services serviceList={serviceList} />
      <div id="testimonials">
        <br />
        <TestiMonials testimonialsData={testimonialsList} />
      </div>
      <HomeAbout />
      <HomeContact />
    </CommonLayout>
  )
}
export default Index

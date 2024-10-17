import React from 'react'
// Componenet
import CommonLayout from 'layouts/CommonLayout'
import ServiceDetails from 'Component/ServiceDetails/ServiceDetails'
import BeforAfter from 'Component/BeforAfterSection/BeforAfter'
import HomeContact from 'Component/Contact/HomeContact'
import { useRouter } from 'next/router'
// Api
import api from 'utils/api'

export async function getStaticPaths() {
  const serviceList = await api
    .getContentList({ urlParams: { contentType: 'service' } })
    .then(res => res.data)
  const serviceEnList = await api
    .getContentList({ urlParams: { contentType: 'service-en' } })
    .then(res => res.data)
  const paths = [
    ...serviceList
      .filter(project => project.values.slug)
      .map(project => ({
        params: {
          slug: project.values.slug,
        },
        locale: 'fa',
      })),
    ...serviceEnList
      .filter(project => project.values.slug)
      .map(project => ({
        params: {
          slug: project.values.slug,
        },
        locale: 'en',
      })),
  ]
  return {
    paths,
    fallback: true,
  }
}
export async function getStaticProps({ params, locale }) {
  const serviceList = await api
    .getContentList({
      urlParams: { contentType: locale === 'fa' ? 'service' : 'service-en' },
      params: {
        values: {
          slug: params.slug,
        },
      },
    })
    .then(res => res.data)

  return {
    props: {
      service: serviceList[0],
    },
    revalidate: 10,
  }
}
const Servicesdetails = ({ service }) => {
  const router = useRouter()
  return (
    <div className="services">
      <CommonLayout
        title={service?.values.title}
        parent={router.locale === 'fa' ? 'خانه' : 'Home'}
        parentRoute="/"
        mobileImage="/services.png"
        desktopImage="/services.png"
        subTitle={service?.values.brief}
      >
        <ServiceDetails service={service} />
        <div>
          <BeforAfter BeforAfterList={service?.relatedContents} noTitle />
        </div>
        <HomeContact />.
        <div
          className="detail-description pt-3 container  "
          style={{ paddingLeft: '18px', paddingRight: '18px' }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: service?.values.description3,
            }}
            style={{
              textAlign: 'justify',
            }}
          />
        </div>
      </CommonLayout>
    </div>
  )
}
export default Servicesdetails

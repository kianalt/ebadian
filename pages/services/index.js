import React from 'react'
// Componenet
import CommonLayout from 'layouts/CommonLayout'
import Services from 'Component/Services/Services'
import api from 'utils/api'
import { useRouter } from 'next/router'

export async function getStaticProps({ locale }) {
  const serviceList = await api
    .getContentList({
      urlParams: { contentType: locale === 'fa' ? 'service' : 'service-en' },
    })
    .then(res => res.data)

  return {
    props: {
      serviceList: serviceList || [],
    },
    revalidate: 10,
  }
}
const Service = ({ serviceList }) => {
  const router = useRouter()
  return (
    <div className="services">
      <CommonLayout
        title={router.locale === 'fa' ? 'خدمات' : 'Services'}
        parent={router.locale === 'fa' ? 'خانه' : 'Home'}
        parentRoute="/"
        mobileImage="/services.png"
        desktopImage="/services.png"
      >
        <div className="mt-50">
          <Services noTitle serviceList={serviceList} />
        </div>
      </CommonLayout>
    </div>
  )
}
export default Service

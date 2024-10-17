import React from 'react'
// Componenet
import CommonLayout from 'layouts/CommonLayout'
import api from 'utils/api'
import { useRouter } from 'next/router'
import CaseList from 'Component/Case/CaseList'

export async function getStaticProps({ locale }) {
  const casesList = await api
    .getContentList({
      urlParams: { contentType: locale === 'fa' ? 'case' : 'case-en' },
    })
    .then(res => res.data)

  return {
    props: {
      casesList: casesList || [],
    },
    revalidate: 10,
  }
}
const Cases = ({ casesList }) => {
  const router = useRouter()
  return (
    <div className="services">
      <CommonLayout
        title={router.locale === 'fa' ? 'کیس ها' : 'Cases'}
        parent={router.locale === 'fa' ? 'خانه' : 'Home'}
        parentRoute="/"
        mobileImage="/services.png"
        desktopImage="/services.png"
      >
        <div className="mt-50">
          <CaseList casesList={casesList} />
        </div>
      </CommonLayout>
    </div>
  )
}
export default Cases

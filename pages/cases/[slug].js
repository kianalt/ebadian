import React from 'react'
// Componenet
import CommonLayout from 'layouts/CommonLayout'
import { useRouter } from 'next/router'
import CasesDetails from 'Component/Case/CasesDetails'
// Api
import api from 'utils/api'

export async function getStaticPaths() {
  const casesList = await api
    .getContentList({ urlParams: { contentType: 'case' } })
    .then(res => res.data)
  const casesEnList = await api
    .getContentList({ urlParams: { contentType: 'case-en' } })
    .then(res => res.data)
  const paths = [
    ...casesList
      .filter(cases => cases.values.slug)
      .map(cases => ({
        params: {
          slug: cases.values.slug,
        },
        locale: 'fa',
      })),
    ...casesEnList
      .filter(cases => cases.values.slug)
      .map(cases => ({
        params: {
          slug: cases.values.slug,
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
  const caseList = await api
    .getContentList({
      urlParams: { contentType: locale === 'fa' ? 'case' : 'case-en' },
      params: {
        values: {
          slug: params.slug,
        },
      },
    })
    .then(res => res.data)

  return {
    props: {
      cases: caseList[0],
    },
    revalidate: 10,
  }
}
const CaseDetails = ({ cases }) => {
  const router = useRouter()
  return (
    <div className="services">
      <CommonLayout
        title={cases?.values.title}
        parent={router.locale === 'fa' ? 'خانه' : 'Home'}
        parentRoute="/"
        mobileImage="/services.png"
        desktopImage="/services.png"
      >
        <CasesDetails cases={cases} />
      </CommonLayout>
    </div>
  )
}
export default CaseDetails

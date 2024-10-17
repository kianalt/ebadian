import React from 'react'

// Componenet
import CommonLayout from 'layouts/CommonLayout'
import BeforAfter from 'Component/BeforAfterSection/BeforAfter'
import api from 'utils/api'
import { useRouter } from 'next/router'

export async function getStaticProps({ locale }) {
  const beforeAfterList = await api
    .getContentList({
      urlParams: {
        contentType: locale === 'fa' ? 'beforeAfter' : 'beforeAfter-en',
      },
    })
    .then(res => res.data)

  return {
    props: {
      beforeAfterList: beforeAfterList || [],
    },
    revalidate: 10,
  }
}
const Beforafter = ({ beforeAfterList }) => {
  const router = useRouter()
  return (
    <div>
      <CommonLayout
        title={router.locale === 'fa' ? 'قبل و بعد' : 'Before & After'}
        parent={router.locale === 'fa' ? 'خانه' : 'Home'}
        parentRoute="/"
        mobileImage="/mobilebefor.png"
        desktopImage="/desktopbefor.png"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      >
        <div className="bfeorAfter">
          <BeforAfter BeforAfterList={beforeAfterList} noTitle />
        </div>
      </CommonLayout>
    </div>
  )
}
export default Beforafter

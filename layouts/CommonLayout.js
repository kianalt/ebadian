import React, { useState } from 'react'

// Next
import Head from 'next/head'

// Componenets
import Header from 'Component/Header/Header'
import Footer from 'Component/Footer/Footer'
import Breadcrumb from 'Component/Breadcrumb/Breadcrumb'

const CommonLayout = ({
  title,
  noBreadcrumb,
  parent,
  parentRoute,
  subParent,
  subParentRoute,
  children,
  mobileImage,
  desktopImage,
}) => {
  const [status, setStatus] = useState(false)

  const breadcrumbList = []
  if (parentRoute) {
    breadcrumbList.push({
      title: parent,
      url: `${process.env.NEXT_PUBLIC_ORIGIN}${parentRoute}`,
    })
  }
  if (subParentRoute) {
    breadcrumbList.push({
      title: subParent,
      url: `${process.env.NEXT_PUBLIC_ORIGIN}${subParentRoute}`,
    })
  }
  breadcrumbList.push({
    title,
    url: undefined,
  })

  return (
    <>
      <Head>
        <title>{`${title} | Dr.Ebadian `}</title>
      </Head>
      <Header
        noBreadcrumb={noBreadcrumb}
        status={status}
        setStatus={setStatus}
      />
      {!noBreadcrumb && (
        <Breadcrumb
          title={title}
          parent={parent}
          parentRoute={parentRoute}
          subParent={subParent}
          subParentRoute={subParentRoute}
          mobileImage={mobileImage}
          desktopImage={desktopImage}
        />
      )}
      <div className="main">
        <div className="page-container">{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default CommonLayout

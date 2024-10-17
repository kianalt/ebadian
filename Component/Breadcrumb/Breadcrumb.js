import React, { useEffect, useState } from 'react'

import Title from 'Component/Tile/Title'
// Next
import Link from 'next/link'
import Image from 'next/image'

const Breadcrumb = ({
  title,
  parent,
  parentRoute,
  subParent,
  subParentRoute,
  mobileImage,
  desktopImage,
  subTitle,
}) => {
  const [mobileSrc, setMobileSrc] = useState(false)
  const [desktopSrc, setdesktopSrc] = useState(false)
  const [imageSrc, setImageSrc] = useState(desktopSrc)
  useEffect(() => {
    const updateImageSrc = () => {
      const screenWidth = window.innerWidth
      if (screenWidth < 900) {
        setImageSrc(mobileImage)
        setMobileSrc(true)
        setdesktopSrc(false)
      } else {
        setImageSrc(desktopImage)
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
    <div className="breadcrumb ">
      <div className="breadcrumb-container">
        <div className="breadcrumb-container-cover" />
        {desktopSrc && <Image src={imageSrc} layout="fill" />}
        {mobileSrc && <Image src={imageSrc} layout="fill" />}
        <div className="dlab-bnr-inr-entry">
          <nav aria-label="breadcrumb" className="breadcrumb-row">
            <ul>
              {subParent && (
                <li className="breadcrumb-item" aria-current="page">
                  <Link prefetch={false} href={subParentRoute}>
                    {subParent}
                  </Link>
                </li>
              )}{' '}
              <li className="breadcrumb-item">
                <Link prefetch={false} href={parentRoute}>
                  {parent}
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {title}
              </li>
            </ul>
          </nav>
          <Title title={title} subTitle={subTitle} />
        </div>
      </div>
    </div>
  )
}
export default Breadcrumb

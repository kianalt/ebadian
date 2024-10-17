/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const CaseDetails = ({ cases }) => {
  const router = useRouter()
  const galleryList = [
    { image: cases?.values.img1 },
    { image: cases?.values.img2 },
    { image: cases?.values.img3 },
    { image: cases?.values.img4 },
    { image: cases?.values.img5 },
    { image: cases?.values.img6 },
    { image: cases?.values.img7 },
    { image: cases?.values.img8 },
    { image: cases?.values.img9 },
    { image: cases?.values.img10 },
    { image: cases?.values.img11 },
    { image: cases?.values.img12 },
  ]
  const gallerylist = galleryList.filter(image => image.image !== undefined)
  const [isOpen, setIsOpen] = useState(false)
  // Initialize currentImage with null or an empty string.
  const [currentImage, setCurrentImage] = useState('')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const openLightbox = (imageSrc, index) => {
    setCurrentImage(imageSrc) // Set the current image URL to be shown in the lightbox.
    setCurrentImageIndex(index)
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
  }
  const moveToNextImage = () => {
    const newIndex = (currentImageIndex + 1) % gallerylist.length
    setCurrentImage(
      `${process.env.NEXT_PUBLIC_ORIGIN}${gallerylist[newIndex].image}`,
    )
    setCurrentImageIndex(newIndex)
  }

  const moveToPrevImage = () => {
    const newIndex =
      (currentImageIndex - 1 + gallerylist.length) % gallerylist.length
    setCurrentImage(
      `${process.env.NEXT_PUBLIC_ORIGIN}${gallerylist[newIndex].image}`,
    )
    setCurrentImageIndex(newIndex)
  }
  return (
    <div className="container  casesList-container">
      <div className="cases">
        <div className="cases-container">
          <div className="case-flex">
            <div className="case-Image">
              <Image
                src={`${process.env.NEXT_PUBLIC_ORIGIN}${cases?.values.image}/650x650`}
                layout="fill"
              />
            </div>

            <div className="case-text">
              <h3>{cases?.values.title}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: cases?.values.description,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', textAlign: 'center', marginTop: '6%' }}>
        <h6>
          {router.locale === 'fa'
            ? 'تصاویر مربوط به این مورد را ببینید'
            : 'See Pictures For this Case'}
        </h6>
      </div>
      <div className="gallery">
        <div className="row">
          {gallerylist
            .filter(image => image.image !== undefined)
            .map((image, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="galler-item">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_ORIGIN}${image.image}`}
                    layout="fill"
                    onClick={() =>
                      openLightbox(
                        `${process.env.NEXT_PUBLIC_ORIGIN}${image.image}`,
                        index,
                      )
                    }
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={currentImage}
          nextSrc={`${process.env.NEXT_PUBLIC_ORIGIN}${
            gallerylist[(currentImageIndex + 1) % gallerylist.length].image
          }`}
          prevSrc={`${process.env.NEXT_PUBLIC_ORIGIN}${
            gallerylist[
              (currentImageIndex - 1 + gallerylist.length) % gallerylist.length
            ].image
          }`}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={moveToPrevImage}
          onMoveNextRequest={moveToNextImage}
        />
      )}
    </div>
  )
}
export default CaseDetails

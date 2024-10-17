/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import Title from 'Component/Tile/Title'
import Image from 'next/image'
import React, { useState } from 'react'
import Slider from 'react-slick'
import { useRouter } from 'next/router'
import BeforeAfterImage2 from './BeforAfterImage2'

const BeforAfter = ({ BeforAfterList, noTitle }) => {
  const [show, setShow] = useState(true)
  const [srcImage, setSrcImage] = useState()
  const router = useRouter()
  const settings = {
    dots: true,
    autoplay: true,
    speed: 1000,
    loop: true,
    slidesToShow: 4,
    slidesToScroll: 3,
  }

  return (
    <div className="BeforAfterContainer  container">
      {!noTitle && (
        <Title
          title={router.locale === 'fa' ? 'قبل و بعد' : 'Before & After'}
        />
      )}
      {BeforAfterList?.map((beforafter, index) => (
        <div
          className={`row BeforAfterContainerFlex ${
            index % 2 === 0 ? 'even' : 'odd'
          }`}
          key={beforafter._id}
        >
          <div className="col-md-6 col-sm-12 beforafter-descriptions p-5 mt-lg-4 mt-sm-0">
            <h3>{beforafter?.values.title}</h3>
            <div className="beforafter-uderlin" />
            <div className="details">
              <div className="details-desction">
                <img src="/tag.png" />
                <p>{beforafter?.values.title}</p>
              </div>
              <div className="details-desction">
                <img src="/tick.png" />
                <p>
                  {router.locale === 'fa' ? 'درمان :' : 'Treatment :'}{' '}
                  {beforafter?.values.treatment}
                </p>
              </div>
              <div className="details-desction">
                <img src="/tick.png" />
                <p>
                  {router.locale === 'fa'
                    ? 'تعداد واحدها :'
                    : 'Number of units :'}{' '}
                  {beforafter?.values.units}
                </p>
              </div>
              <div className="details-desction">
                <img src="/tick.png" />
                <p>
                  {router.locale === 'fa' ? 'رنگ :' : 'Color :'}{' '}
                  {beforafter?.values.color}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 beforafter__image p-5">
            {show ? (
              <BeforeAfterImage2
                before={`${process.env.NEXT_PUBLIC_ORIGIN}${beforafter?.values.before}/650x650`}
                after={`${process.env.NEXT_PUBLIC_ORIGIN}${beforafter?.values.after}/650x650`}
              />
            ) : (
              <div
                className="container single-Image "
                style={{ position: 'relative' }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_ORIGIN}${srcImage}/650x650`}
                  layout="fill"
                />
              </div>
            )}
            <div className="show-image pt-3" style={{ width: '100%' }}>
              <div style={{ width: '100%', overflow: 'hidden' }}>
                <Slider {...settings}>
                  {beforafter?.values.img1 && (
                    <div className="extraImage">
                      <div
                        role="button"
                        className=" extraImage-wrapper "
                        onClick={() => {
                          setShow(false)
                          setSrcImage(beforafter?.values.img1)
                        }}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_ORIGIN}${beforafter?.values.img1}/450x450`}
                          width={120}
                          height={100}
                        />
                      </div>
                    </div>
                  )}

                  {beforafter?.values.img2 && (
                    <div className="extraImage">
                      <div
                        role="button"
                        className=" extraImage-wrapper "
                        onClick={() => {
                          setShow(false)
                          setSrcImage(beforafter?.values.img2)
                        }}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_ORIGIN}${beforafter?.values.img2}/450x450`}
                          width={120}
                          height={100}
                        />
                      </div>
                    </div>
                  )}

                  {beforafter?.values.img3 && (
                    <div className="extraImage">
                      <div
                        role="button"
                        className=" extraImage-wrapper "
                        onClick={() => {
                          setShow(false)
                          setSrcImage(beforafter?.values.img3)
                        }}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_ORIGIN}${beforafter?.values.img3}/450x450`}
                          width={120}
                          height={100}
                        />
                      </div>
                    </div>
                  )}

                  {beforafter?.values.img4 && (
                    <div className="extraImage">
                      <div
                        role="button"
                        className=" extraImage-wrapper "
                        onClick={() => {
                          setShow(false)
                          setSrcImage(beforafter?.values.img4)
                        }}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_ORIGIN}${beforafter?.values.img3}/450x450`}
                          width={120}
                          height={100}
                        />
                      </div>{' '}
                    </div>
                  )}

                  {beforafter?.values.img5 && (
                    <div className="extraImage">
                      <div
                        role="button"
                        className=" extraImage-wrapper "
                        onClick={() => {
                          setShow(false)
                          setSrcImage(beforafter?.values.img5)
                        }}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_ORIGIN}${beforafter?.values.img3}/450x450`}
                          width={120}
                          height={100}
                        />
                      </div>
                    </div>
                  )}

                  {beforafter?.values.after && (
                    <div className="extraImage">
                      <div
                        role="button"
                        className=" extraImage-wrapper "
                        onClick={() => {
                          setShow(true)
                        }}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_ORIGIN}${beforafter?.values.after}/450x450`}
                          width={120}
                          height={100}
                        />
                      </div>
                    </div>
                  )}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default BeforAfter

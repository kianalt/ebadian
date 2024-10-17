import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'

const BeforeAfterImage2 = ({ before, after }) => {
  // eslint-disable-next-line no-unused-vars
  const [showImage, setShowImage] = useState(false)

  return (
    <VisibilitySensor
      partialVisibility
      offset={{
        top: 300,
      }}
      onChange={isVisible => {
        if (isVisible) {
          setShowImage(true)
        }
      }}
    >
      <section
        className="content-inner"
        // style={{ backgroundImage: 'url(/images/background/bg4.png)' }}
      >
        <div className="container">
          <div className="section-head style-1 text-center" />

          <div dir="ltr" className="before-after-slider-container">
            <ReactBeforeSliderComponent
              firstImage={{
                imageUrl: after,
              }}
              secondImage={{
                imageUrl: before,
              }}
              delimiterIconStyles={{
                width: '50px',
                height: '50px',
                backgroundSize: 'cover',
                borderRadius: 'none',
                backgroundImage: 'url(/icon-bg.png)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundOrigin: 'content-box',
                backgroundColor: 'none',
              }}
            />
          </div>
        </div>
      </section>
    </VisibilitySensor>
  )
}

export default BeforeAfterImage2

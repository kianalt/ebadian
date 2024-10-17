import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

const TestimonialSlidr = ({ testimonialsData }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 50000,
    slidesToShow: 3,
    initialSlide: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px', // No padding for true centering
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 900, // Below 900px
        settings: {
          slidesToShow: 1, // Only one slide visible
          centerMode: true, // Ensure the slide is centered
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 901, // From 901px to infinite
        settings: {
          slidesToShow: 3, // Three slides visible
          centerMode: true,
          centerPadding: '0px',
        },
      },
    ],
    beforeChange: (current, next) => {
      // Adjusting for the center mode, assuming the currentSlide should always be in the middle of the visible slides
      const centeredIndex =
        Math.floor(next + settings.slidesToShow / 2) % testimonialsData.length
      setCurrentSlide(centeredIndex)
    },
  }

  return (
    <div className="testimonials-container container">
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial._id}
            className={`testimonial-item ${
              index === currentSlide ? 'active-slide' : ''
            }`}
          >
            <div className="partTop">
              <div
                className={`${
                  index === currentSlide
                    ? 'testimonial-image-active'
                    : 'testimonial-image'
                }`}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_ORIGIN}${testimonial?.values.image}/450x450`}
                  alt={testimonial?.values.name}
                />
                <div
                  className={`${
                    index === currentSlide ? '' : 'testimonial-overlay'
                  }`}
                />
              </div>
              <h3
                className={`${
                  index === currentSlide
                    ? 'testimonial-name'
                    : 'testimonial-name testimonial-name-overlay'
                }`}
              >
                {testimonial?.values.name}
              </h3>
              <h6
                className={`${
                  index === currentSlide
                    ? 'testimonial-position'
                    : 'testimonial-position testimonial-position-overlay'
                }`}
              >
                {testimonial?.values.position}
              </h6>
            </div>
            <div className="partBottom">
              <Image
                src={`${index === currentSlide ? '/light.png' : '/dark.png'}`}
                width={40}
                height={40}
              />
              <div
                className={`${
                  index === currentSlide
                    ? 'testimonial-text active'
                    : 'testimonial-text testimonial-text-overlay'
                }`}
              >
                <p>{testimonial?.values.message}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TestimonialSlidr

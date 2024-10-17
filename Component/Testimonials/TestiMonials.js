import Title from 'Component/Tile/Title'
import React from 'react'
import { useRouter } from 'next/router'
import TestimonialSlidr from './TestimonialSlider'

const TestiMonials = ({ testimonialsData }) => {
  const router = useRouter()
  return (
    <div className="testimonials">
      <Title
        title={router.locale === 'fa' ? 'نظرات مشتریان' : 'testimonials'}
      />

      <TestimonialSlidr testimonialsData={testimonialsData} />
    </div>
  )
}
export default TestiMonials

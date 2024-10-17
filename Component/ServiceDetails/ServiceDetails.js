import React from 'react'
import Image from 'next/image'

const ServiceDetails = ({ service }) => (
  <div className="ServiceDetails container">
    <div className=" row ">
      <div className="col-lg-7 col-md-7 col-sm-12 ">
        <div className="services-context-details">
          <div
            dangerouslySetInnerHTML={{
              __html: service?.values.description1,
            }}
            style={{
              textAlign: 'justify',
              marginBottom: '1rem !important',
            }}
          />
        </div>
      </div>
      <div className="col-lg-5 col-md-5 col-sm-12 context-details mt-1">
        <Image src="/detailTheet.png" layout="fill" />
      </div>
      <div className="col-lg-12">
        <div className="services-context-details-bottom">
          <div
            dangerouslySetInnerHTML={{
              __html: service?.values.description2,
            }}
            style={{
              textAlign: 'justify',
            }}
          />
        </div>
      </div>
    </div>
  </div>
)

export default ServiceDetails

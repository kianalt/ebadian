import React from 'react'

const Title = ({ title, subTitle }) => (
  <div className="title-container">
    <h2>{title}</h2>
    {subTitle ? <p>{subTitle}</p> : <div className="mb-4" />}
  </div>
)

export default Title

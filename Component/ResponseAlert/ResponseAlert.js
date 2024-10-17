import React from 'react'

const ResponseAlert = ({ type, text }) =>
  text && (
    <p
      className={type === 'success' ? 'text-success' : 'text-danger'}
      style={{ width: '100%' }}
    >
      {text}
    </p>
  )

export default ResponseAlert

import React from 'react'

const Error404 = () => (
  <div className='container'>
    <div className='mt-4'>
      <h1>This page isn't available</h1>
      <p>Sorry about that. Click <a onClick={() => (window.location = '/')}>here</a> to navigate home.</p>
    </div>
  </div>
)

export default Error404

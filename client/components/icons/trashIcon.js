import React from 'react'

const TrashIcon = ({ className, fill = 'var(--text-color-secondary)' }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='1.1rem'
    height='1.1rem'
    viewBox='0 0 24 24'
    version='1.1'
  >
    <title>Icons/trash-outline</title>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id='trash-outline'>
        <rect fill='#8D8E8F' fillRule='nonzero' opacity='0' x='0' y='0' width='24' height='24' />
        <path
          d='M21,6 L16,6 L16,4.33 C15.951155,2.99710005 14.8330357,1.95501294 13.5,2 L10.5,2 C9.16696427,1.95501294 8.04884504,2.99710005 8,4.33 L8,6 L3,6 C2.44771525,6 2,6.44771525 2,7 C2,7.55228475 2.44771525,8 3,8 L4,8 L4,19 C4,20.6568542 5.34314575,22 7,22 L17,22 C18.6568542,22 20,20.6568542 20,19 L20,8 L21,8 C21.5522847,8 22,7.55228475 22,7 C22,6.44771525 21.5522847,6 21,6 Z M10,4.33 C10,4.17 10.21,4 10.5,4 L13.5,4 C13.79,4 14,4.17 14,4.33 L14,6 L10,6 L10,4.33 Z M18,19 C18,19.5522847 17.5522847,20 17,20 L7,20 C6.44771525,20 6,19.5522847 6,19 L6,8 L18,8 L18,19 Z'
          id='Shape'
          fill={fill}
        />
      </g>
    </g>
  </svg>
)

export default TrashIcon

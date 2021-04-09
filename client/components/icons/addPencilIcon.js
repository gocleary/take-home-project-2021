import React from 'react'

const AddPencilIcon = ({ fillColor = 'var( --kebab-menu-icon-color)', width = 16, height = 16 }) => (
  <svg width={width} height={height} viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg'>
    <g id='Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g id='edit-outline' transform='translate(-4.000000, -4.000000)' fill={fillColor}>
        <path d='M19.4,7.34 L16.66,4.6 C15.9197239,3.90465395 14.7758233,3.8745513 14,4.53 L5,13.53 C4.67676568,13.8559651 4.4755046,14.2832035 4.43,14.74 L4,18.91 C3.97272602,19.2065447 4.07903692,19.4998162 4.29,19.71 C4.47871883,19.8971865 4.73419702,20.0015368 5,20.0000167 L5.09,20.0000167 L9.26,19.62 C9.71679646,19.5744954 10.1440349,19.3732343 10.47,19.05 L19.47,10.05 C20.19729,9.2816618 20.1659864,8.06976648 19.4,7.34 Z M9.08,17.62 L6.08,17.9 L6.35,14.9 L12,9.32 L14.7,12.02 L9.08,17.62 Z M16,10.68 L13.32,8 L15.27,6 L18,8.73 L16,10.68 Z' id='Shape' />
      </g>
    </g>
  </svg>
)

export default AddPencilIcon

import React, { useRef, useState } from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'

const HoverAndClickPopover = ({
  children, target, id, popoverClassName,
}) => {
  const mouseLeftTextTimer = useRef()

  const [showTooltip, setShowTooltip] = useState(false)
  const [isMouseOverToolTip, setIsMouseOverToolTip] = useState(false)

  const handleMouseLeftText = () => {
    setShowTooltip(isMouseOverToolTip)
  }

  const handleTextMouseEnter = () => {
    clearTimeout(mouseLeftTextTimer.current)
    setShowTooltip(true)
  }

  const handleTextMouseLeave = () => {
    mouseLeftTextTimer.current = setTimeout(handleMouseLeftText, 75)
  }

  const popover = (
    <Popover placement='bottom' className={popoverClassName}>
      {children}
    </Popover>
  )

  return (
    <span onMouseEnter={handleTextMouseEnter} onMouseLeave={handleTextMouseLeave}>
      <OverlayTrigger show={showTooltip} placement='bottom-start' overlay={popover}>
        <span id={id} style={{ cursor: 'pointer' }}>
          {target}
        </span>
      </OverlayTrigger>
    </span>
  )
}

export default HoverAndClickPopover

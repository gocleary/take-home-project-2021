import React, { useState, useEffect, useRef } from 'react'
import { Tooltip } from 'reactstrap'

import HelpIcon from 'components/icons/helpIcon'

import classNames from 'classnames'

const HelpTooltip = ({
  children, className, style = {}, iconStyle = {}, icon, id,
}) => {
  const Icon = icon

  // We need a unique, non-random id to identify each tooltip.
  // We can use the children's text content as an id, but children
  // can also be html elements or react components, so we recursively
  // get the children's innermost node, which would be the text node.
  let innerText = ''
  const findInnermostNode = children => React.Children.map(children, (child) => {
    if (typeof child === 'string') {
      innerText = child
    } else {
      findInnermostNode(child.props.children)
    }
  })

  findInnermostNode(children)

  // Turns "This is a team's content!" to "Thisisateamscontent"
  const tooltipId = id || innerText.replace(/[\W_]+/g, '')

  const [tooltipOpen, setTooltipOpen] = useState(false)

  const toggle = () => setTooltipOpen(!tooltipOpen)

  return (
    <span className={classNames('HelpIcon', className)} style={style}>
      <span id={tooltipId}>{icon ? <Icon /> : <HelpIcon style={iconStyle} />}</span>
      <Tooltip
        className='Tooltip'
        innerClassName='TooltipBox'
        placement='bottom'
        trigger='hover'
        isOpen={tooltipOpen}
        target={tooltipId}
        toggle={toggle}
      >
        {children}
      </Tooltip>
    </span>
  )
}

export default HelpTooltip

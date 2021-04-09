import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import TooltipIcon from 'components/icons/tooltipIcon'

const ClearyTooltip = ({
  placement = 'right',
  key,
  show = 100,
  hide = 500,
  children,
  className,
  tooltipClassName,
  Icon = TooltipIcon,
  content = null,
}) => (
  <OverlayTrigger
    key={key}
    placement={placement}
    delay={{ show, hide }}
    overlay={<Tooltip className={tooltipClassName} id={`tooltip-${placement}`}>{children}</Tooltip>}
  >
    <span className={className}>
      {content}
      {!content && <Icon />}
    </span>
  </OverlayTrigger>
)

export default ClearyTooltip

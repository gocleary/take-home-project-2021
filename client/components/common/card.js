import React from 'react'
import { Card } from 'react-bootstrap'

const ClearyCard = ({
  className, title, subtitle, children, cardBodyClassName, onClick, cardRef, hasBoxShadow = true, hideBorder = true,
}) => {
  const boxShadow = hasBoxShadow ? 'var(--card-box-shadow)' : 'none'
  const border = hideBorder ? '0' : 'solid 1px var(--light-gray)'

  return (
    <Card
      ref={cardRef}
      onClick={onClick}
      className={className}
      style={{
        boxShadow, border, borderRadius: 'var(--square-border-radius)',
      }}
    >
      <Card.Body className={cardBodyClassName}>
        {title && <Card.Title>{title}</Card.Title>}
        {subtitle && <Card.Subtitle className='mb-2 text-muted'>{subtitle}</Card.Subtitle>}
        {children}
      </Card.Body>
    </Card>
  )
}

export default ClearyCard

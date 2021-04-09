import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import LoadingSpinnerText from 'components/common/loadingSpinnerText'

const ButtonLink = ({
  children, to, onClick, className, variant = 'primary', showLoadingSpinner = false,
}) => (
  <Link to={to} onClick={onClick} className={className}>
    <Button variant={variant}>
      <LoadingSpinnerText showLoadingSpinner={showLoadingSpinner}>
        {children}
      </LoadingSpinnerText>
    </Button>
  </Link>
)

// eslint-disable-next-line import/prefer-default-export
export { ButtonLink }

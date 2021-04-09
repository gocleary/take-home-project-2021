import React from 'react'
import { Button as BootstrapButton } from 'react-bootstrap'
import LoadingSpinnerText from 'components/common/loadingSpinnerText'

const ButtonLarge = ({
  className, id, disabled, onClick, children, variant = 'primary', showLoadingSpinner = false,
}) => (
  <BootstrapButton
    id={id}
    className={className}
    size='lg'
    onClick={onClick}
    disabled={disabled}
    variant={variant}
  >
    <LoadingSpinnerText showLoadingSpinner={showLoadingSpinner}>
      {children}
    </LoadingSpinnerText>
  </BootstrapButton>
)

// eslint-disable-next-line import/prefer-default-export
export { ButtonLarge }

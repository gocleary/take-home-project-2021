import React from 'react'
import { Button as BootstrapButton } from 'react-bootstrap'
import LoadingSpinnerText from 'components/common/loadingSpinnerText'

const Button = ({
  className,
  id,
  disabled,
  type,
  onClick,
  onMouseEnter,
  onMouseLeave,
  dataTestId,
  children,
  variant = 'primary',
  showLoadingSpinner = false,
}) => (
  <BootstrapButton
    data-testid={dataTestId}
    className={className}
    variant={variant}
    id={id}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{ fontSize: '1rem' }}
    onClick={onClick}
    disabled={disabled}
    type={type} // Submit
  >
    <LoadingSpinnerText showLoadingSpinner={showLoadingSpinner}>
      {children}
    </LoadingSpinnerText>
  </BootstrapButton>
)

const ButtonSecondary = ({
  className, id, disabled, type, size, onClick, children, showLoadingSpinner = false,
}) => (
  <BootstrapButton
    id={id}
    className={className}
    style={{ fontSize: '1rem' }}
    onClick={onClick}
    disabled={disabled}
    variant='secondary'
    type={type} // Submit
    size={size}
  >
    <LoadingSpinnerText showLoadingSpinner={showLoadingSpinner}>
      {children}
    </LoadingSpinnerText>
  </BootstrapButton>
)

export { Button, ButtonSecondary }

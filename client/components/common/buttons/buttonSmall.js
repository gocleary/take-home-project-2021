import React from 'react'
import { Button as BootstrapButton } from 'react-bootstrap'
import LoadingSpinnerText from 'components/common/loadingSpinnerText'

import classNames from 'classnames'

const ButtonSmall = ({
  id,
  className,
  style,
  disabled,
  type,
  variant = 'primary',
  onMouseEnter,
  onMouseLeave,
  onClick,
  children,
  showLoadingSpinner = false,
}) => (
  <BootstrapButton
    className={className}
    size='sm'
    style={{ height: '2.143rem', ...style }}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    disabled={disabled}
    variant={variant}
    type={type}
    id={id}
  >
    <LoadingSpinnerText showLoadingSpinner={showLoadingSpinner}>
      {children}
    </LoadingSpinnerText>
  </BootstrapButton>
)

const ButtonSmallNarrow = ({
  className, id, style, disabled, onClick, variant, children, showLoadingSpinner = false,
}) => (
  <ButtonSmall
    id={id}
    style={{ minWidth: '100px', ...style }}
    className={className}
    onClick={onClick}
    disabled={disabled}
    variant={variant}
  >
    <LoadingSpinnerText showLoadingSpinner={showLoadingSpinner}>
      {children}
    </LoadingSpinnerText>
  </ButtonSmall>
)

const ButtonSecondarySmall = ({
  className, id, disabled, type, style, value, onClick, children, showLoadingSpinner = false,
}) => (
  <BootstrapButton
    id={id}
    className={classNames('btn-secondary-sm', className)}
    onClick={onClick}
    style={style}
    disabled={disabled}
    value={value}
    variant='secondary'
    type={type} // Submit
    size='sm'
  >
    <LoadingSpinnerText showLoadingSpinner={showLoadingSpinner}>
      {children}
    </LoadingSpinnerText>
  </BootstrapButton>
)

export { ButtonSmall, ButtonSmallNarrow, ButtonSecondarySmall }

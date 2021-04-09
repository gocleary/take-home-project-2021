import React from 'react'

import { Fade } from 'react-reveal'
import Error404 from 'components/errors/404'
import LoadingSpinner from 'components/common/loadingSpinner'
import classNames from 'classnames'

const LoadingContainer = ({
  children, isLoading, isNotFound, fadeIn = true,
}) => {
  if (isNotFound) {
    return <Error404 />
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  let ChildComponent = typeof children === 'function' ? children() : children

  // We need to merge the existing className with the LoadingContainer className
  ChildComponent = React.cloneElement(ChildComponent, {
    className: classNames(ChildComponent.props.className, 'LoadingContainer--Children'),
  })

  ChildComponent = fadeIn ? <Fade>{ChildComponent}</Fade> : ChildComponent

  return ChildComponent
}

export default LoadingContainer

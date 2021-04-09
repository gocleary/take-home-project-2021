import React, { Component } from 'react'

import classNames from 'classnames'
import { connect } from 'react-redux'

class ErrorBoundary extends Component {
  state = {
    error: null,
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error }
  }

  componentDidMount() {
    const { history } = this.props
    history && this.listen()
  }

  componentDidCatch(error, errorInfo) { // eslint-disable-line react/sort-comp
    console.error(error) // eslint-disable-line no-console
  }

  componentWillUnmount() {
    this.unlisten()
  }

  listen = () => {
    const { history } = this.props

    // We need to reset the ErrorBoundary when user switches pages, otherwise the error message will persist.
    this.unlisten = history.listen(() => {
      this.setState({ error: null })
    })
  }

  render() {
    const { error } = this.state
    const {
      className, history, onErrorRender, showTitle = true,
    } = this.props
    const isInnerErrorBoundary = typeof history !== 'undefined'

    if (error) {
      return (
        <div key='ErrorBoundary' className={classNames('App_ErrorBoundary container my-3', className)}>
          <h2>Something went wrong</h2>
          {onErrorRender && <p className='ErrorBoundary-links'>{onErrorRender}</p>}
          {!onErrorRender && (
            <p className='ErrorBoundary-links'>
              Sorry about that. Click <a onClick={() => (window.location = '/')}>here</a> to navigate home.
              {' '}
              {isInnerErrorBoundary && (
                <>
                  or
                  {' '}
                  <a onClick={() => history.goBack()}>Back</a> to previous page
                </>
              )}
            </p>
          )}
        </div>
      )
    }
    return this.props.children
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
})

export default connect(mapStateToProps)(ErrorBoundary)

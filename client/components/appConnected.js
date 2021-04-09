import React from 'react'
import { connect } from 'react-redux'
import App from 'components/app'

const mapStateToProps = state => ({
  styles: state.styles,
  logo: state.logo,
})

// This component only exists so we can use react-hot-loader on <App />.
// the hot helper cannot be used with the react-redux connect function
export default connect(mapStateToProps, null)(App)

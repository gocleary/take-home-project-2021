import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppRouter from 'components/appRouter'

const App = props => (
  <div className='App' style={{ backgroundColor: props.styles.bgColor }}>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={AppRouter} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default hot(App)

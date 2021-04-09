import React, { useEffect, useState } from 'react'
import {
  Route,
  Switch,
  useLocation
} from 'react-router-dom'

import EventPageContainer from 'pages/eventPageContainer'

import Error404 from 'components/errors/404'
import PathnameContext from 'components/pathnameContext'

const AppRouter = () => {
  const location = useLocation()
  const [currentPathname, setCurrentPathname] = useState()
  const [previousPathname, setPreviousPathname] = useState()

  useEffect(() => {
    setPreviousPathname(currentPathname)
    setCurrentPathname(location.pathname)
  }, [location])

  return (
    <div className='AppRouter'>
      <PathnameContext.Provider value={{ currentPathname, previousPathname }}>
        <Switch>
          <Route path='/events/:eventId/'>
            <EventPageContainer />
          </Route>
          <Route component={Error404} />
        </Switch>
      </PathnameContext.Provider>
    </div>
  )
}

export default AppRouter

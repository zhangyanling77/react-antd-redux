
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect }  from 'react-router-dom'
import ErrorBundary from './ErrorBoundary'
import AuthorizedRoute from './AuthorizedRoute'

const Home = lazy(() => import('../pages/home'))
const About = lazy(() => import('../pages/about'))
const Login = lazy(() => import('../pages/login'))
const Other = lazy(() => import('../pages/other'))
const User = lazy(() => import('../pages/user'))
const NotFound = lazy(() => import('../pages/notFound'))

const App = () => (
  <Router>
    <ErrorBundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/other' component={Other} />
          <Route path="/" render={() => {
            return (
              <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/login" component={Login}/>
                <Redirect exact from='/' to="/home" />
                <AuthorizedRoute path="/user" component={User} />
                <Route component={NotFound} />
              </Switch>
            )
          }}/>
        </Switch>
      </Suspense>
    </ErrorBundary>
  </Router>
)


export default App
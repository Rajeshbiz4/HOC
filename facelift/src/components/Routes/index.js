import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from '../../routes'


const Routes = props => (
  <div className="routes">
    <Switch>
      {routes.map(({exact, path, component}, i) => (
        <Route exact={exact} path={path} component={component} key={i} />
      ))}
      <Redirect to="/404" />
    </Switch>
  </div>
)

export default Routes
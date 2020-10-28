import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

/* Pages Import */
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

/* Routes Import */
import GuestRoute from './GuestRoute';
import AuthRoute from './AuthRoute';
import routes from './routesCode';

/* Other Imports */
import suspense from '../hocs/suspense';

const NotFound = lazy(() => import('../pages/NotFound'));

const Routes = () => (
  <Switch>

    <AuthRoute path={routes.home.path} exact={routes.home.exact} component={Home} />

    <GuestRoute path={routes.sigIn.path} exact={routes.sigIn.exact} component={SignIn} />

    <Route exact={true} path={'*'} component={suspense(NotFound)} />
  </Switch>
);

export default Routes;

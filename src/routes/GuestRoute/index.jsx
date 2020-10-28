import React, { useEffect } from 'react';
import { push } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from '../routesCode';
import { useAppContext } from '../../contexts/authContext';

const GuestRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, userHasAuthenticated } = useAppContext();

  const dispatch = useDispatch();

  useEffect(() => {
    async function onLoad() {
      try {
        // TODO get User
        userHasAuthenticated(true);
        setTimeout(() => {
          dispatch(push(routes.home.path));
        }, 50);
      } catch (e) {

      }
    }
    onLoad();
  }, [userHasAuthenticated, dispatch]);

  return !isAuthenticated ? (
    <Route {...rest} render={(...renderProps) => <Component {...renderProps} />} />
  ) : null;
};

export default GuestRoute;

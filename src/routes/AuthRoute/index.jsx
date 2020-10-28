import React, { useEffect } from 'react';
import { push } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from '../routesCode';
import { useAppContext } from '../../contexts/authContext';
import DefaultLayout from "../../hocs/DefaultLayout";

const AuthRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, userHasAuthenticated } = useAppContext();
  const dispatch = useDispatch();

  useEffect(() => {
    async function onLoad() {
      try {
        // TODO get User

        userHasAuthenticated(true);
      } catch (e) {
        dispatch(push(routes.signIn.path));
      }
    }
    onLoad();
  }, [userHasAuthenticated, dispatch]);

  return isAuthenticated ? (
    <DefaultLayout><Route {...rest} render={(...renderProps) => <Component {...renderProps} />} /></DefaultLayout>
  ) : null;
};

export default AuthRoute;

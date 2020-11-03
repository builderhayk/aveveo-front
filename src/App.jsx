import React from 'react';
import { AppContext } from './contexts/authContext';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

function App() {
  const [isAuthenticated, userHasAuthenticated] = React.useState(false);

  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Routes />
    </AppContext.Provider>
  );
}

export default App;

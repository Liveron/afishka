import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { useRoutesModer } from './routes_moder';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { MyNavbar } from './component/navbar';
import { Loader } from './component/loader';
import 'materialize-css';


function App() {

  const { token, login, logout, userId, mode, ready } = useAuth();

  const isAuthenticated = Boolean(token);
  const routes = useRoutes(isAuthenticated);
  const routesModer = useRoutesModer(isAuthenticated);

  if (!ready) {
    return <Loader />
  };
  if (mode) {
    return (
      <AuthContext.Provider value={{
        token, login, logout, userId, isAuthenticated
      }}>
        <Router>

          {isAuthenticated && <MyNavbar />}

          {routesModer}

        </Router>
      </AuthContext.Provider>
    )
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>

        {isAuthenticated && <MyNavbar />}

        {routes}

      </Router>
    </AuthContext.Provider>
  )
}

export default App;
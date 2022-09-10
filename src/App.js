import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { useRoutesModer } from './routes_moder';
import { useAuth } from './hooks/auth.hook';
import { useMemberState } from './hooks/state.hook';
import { AuthContext } from './context/AuthContext';
import { StateContext } from './context/StateContext';
import { MyNavbar } from './component/navbar';
import { Loader } from './component/loader';
import { MyNavbarWithoutLogin } from './component/navbarWithoutLogin';
import 'materialize-css';


function App() {

  const { token, login, logout, userId, mode, ready } = useAuth();
  const { searchLine, idEvent, setSearchLine, setIdEvent  } = useMemberState();

  const isAuthenticated = Boolean(token);
  const routes = useRoutes(isAuthenticated);
  const routesModer = useRoutesModer(isAuthenticated);

  if (!ready) {
    return <Loader />
  };
  //TODO удалить в проде
  //if (mode) {
  if (false) {
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
      <StateContext.Provider value={{
        searchLine, idEvent, setSearchLine, setIdEvent
    }}>
        <Router>
          {!isAuthenticated && <MyNavbarWithoutLogin />}
          {isAuthenticated && <MyNavbar />}

          {routes}

        </Router>
      </StateContext.Provider>
    </AuthContext.Provider>
  )
}

export default App;
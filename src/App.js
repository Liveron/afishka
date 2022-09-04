import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { MyNavbar } from './component/navbar';
import { Loader } from './component/loader';
import 'materialize-css';


function App() {

  const { token, login, logout, userId, mode, ready } = useAuth();

  const isAuthenticated = Boolean(token);
  const routes = useRoutes(isAuthenticated);


  if (!ready) {
    return <Loader />
  };
  if (mode) {
    return(
      //TODO нужно добавить модераторский блок
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
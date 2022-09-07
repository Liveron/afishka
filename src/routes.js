import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Main } from './pages/MainPage';
import { Portfolio } from './pages/PortfolioPage.js';
import { AuthPage } from './pages/AuthPage';
import { Search } from './pages/SearchPage';
import { Event } from './pages/EventPage';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/main" exact>
          <Main />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/event" exact>
          <Event />
        </Route>
        <Redirect to="/main" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
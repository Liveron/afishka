import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Moderator } from './pages/ModeratePage';
import { AuthPage } from './pages/AuthPage';
import { Search } from './pages/SearchPage';
import { Event } from './pages/EventPage';

export const useRoutesModer = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/mode" exact>
          <Moderator />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/event" exact>
          <Event />
        </Route>
        <Redirect to="/mode" />
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
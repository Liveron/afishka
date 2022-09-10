import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Main } from './pages/MainPage';
import { Personal } from './pages/PersonalPage.js';
import { AuthPage } from './pages/AuthPage';
import { Search } from './pages/SearchPage';
import { Event } from './pages/EventPage';
import { AddEvent } from './pages/AddEventPage';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/auth" exact>
          <AuthPage />
        </Route>
        <Route path="/main" exact>
          <Main />
        </Route>
        <Route path="/personal" exact>
          <Personal />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/event" exact>
          <Event />
        </Route>
        <Route path="/addevent" exact>
          <AddEvent />
        </Route>
        <Redirect to="/main" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/search" exact>
        <Search />
      </Route>
      <Route path="/auth" exact>
          <AuthPage />
        </Route>
      <Redirect to="/search" />
    </Switch>
  )
}
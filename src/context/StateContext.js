import {createContext} from 'react';

function noop() {};

export const StateContext = createContext({
  searchLine: '',
  idEvent: '',
  
  setSearchLine: noop,
  setIdEvent: noop
});
import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Navbar, NavItem, Icon, TextInput, Select, Button, SideNav, SideNavItem } from 'react-materialize';
import { StateContext } from '../context/StateContext';


export const MyNavbarWithoutLogin = () => {
  const history = useHistory();
  const stateCont = useContext(StateContext);

  const hrefHandler = (e, link) => {
    e.preventDefault();
    history.push(link);
  }

  const menuHandler = () => {
    const text = document.querySelector("#headerSearch").value;
    document.querySelector("#headerSearch").value = '';
    stateCont.setSearchLine(text);
    history.push('/search');
  }
  return (
    <>
      <Navbar
        alignLinks="right"
        brand={<a className="brand-logo white-text" href="/main" onClick={(e) => hrefHandler(e, '/main')}>А-фишка</a>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        className="grey darken-4"
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <NavItem>
          <TextInput
            className="white-text"
            icon="search"
            id="headerSearch"
            placeholder="Поиск"

            onKeyPress={(e) => {
              if (e.key === "Enter") {
                menuHandler();
              }
            }}
          />
        </NavItem>
        <NavItem>
          <Button
            node="button"
            waves="light"
            className='red darken-3'
            onClick={(e) => hrefHandler(e, '/auth')}
          >
            Войти
          </Button>
        </NavItem>
      </Navbar >
    </>
  )
}
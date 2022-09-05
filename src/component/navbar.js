import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Navbar, NavItem, Icon, TextInput, Select } from 'react-materialize';


export const MyNavbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    history.push('/');
  }

  const menuHandler = () => {
    //TODO добавить изменение поля поиска и проверку списка мероприятия откуда нажали
    history.push('/search');
  }
  return (
    <>
      <Navbar
        alignLinks="right"
        brand={<a className="brand-logo" href="/main">А-фишка</a>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
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
            icon="search"
            id="TextInput-50"
            label="Поиск"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                menuHandler();
              }
            }}
          />
        </NavItem>

        <NavItem>
          <NavLink to="/main" className="black-text">Главная</NavLink>
        </NavItem>
        <NavItem>
          <Select
            id="Select-65"
            multiple={false}
            onChange={menuHandler}
            options={{
              classes: '',
              dropdownOptions: {
                alignment: 'left',
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                coverTrigger: true,
                hover: false,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
              }
            }}
            value=""
          >
            <option
              disabled
              value=""
            >
              Мероприятия
            </option>
            <option value="1">
              Любые
            </option>
            <option value="1">
              Спортивные
            </option>
            <option value="2">
              Музыкальные
            </option>
            <option value="3">
              Искусство
            </option>
          </Select>
        </NavItem>
        <NavItem>
          <a className="black-text" href="/" onClick={logoutHandler}>Выйти</a>
        </NavItem>
      </Navbar>

    </>
  )
}
import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Navbar, NavItem, Icon, TextInput, Select, Button, SideNav, SideNavItem } from 'react-materialize';
import { useMemberState } from '../hooks/state.hook';


export const MyNavbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { setSearchLine } = useMemberState();

  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    history.push('/');
  }

  const hrefHandler = (e, link) => {
    e.preventDefault();
    history.push(link);
  }

  const menuHandler = () => {
    const text = document.querySelector("#headerSearch").value;
    document.querySelector("#headerSearch").value = '';
    setSearchLine(text);
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
          <NavLink to="/main" className="white-text">Главная</NavLink>
        </NavItem>
        <NavItem>
          <Select
            id="Select-65"
            multiple={false}
            onChange={menuHandler}
            className="white-text"
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
        <div>
          <style>
            {`
            #root > div {
              z-index: 99999 !important;
            }
          `}
          </style>
          <SideNav
            id="SideNav-37"
            options={{
              draggable: true,
              edge: 'right'
            }}
            trigger={<Button node="button" className='red darken-3'>Меню</Button>}
          >
            <SideNavItem
              user={{
                background: 'https://placeimg.com/640/480/tech',
                email: 'jdandturk@gmail.com',
                image: 'static/media/react-materialize-logo.824c6ea3.svg',
                name: 'John Doe'
              }}
              userView
            />
            <SideNavItem
              onClick={(e) => hrefHandler(e, '/addevent')}
              icon={<Icon>add_circle</Icon>}>
              Добавить мероприятие
            </SideNavItem>
            <SideNavItem
              onClick={(e) => hrefHandler(e, '/personal')}
              icon={<Icon>account_circle</Icon>}>
              Личный кабинет
            </SideNavItem>
            <SideNavItem divider />
            <SideNavItem
              onClick={logoutHandler}
              icon={<Icon>exit_to_app</Icon>}
              waves>
              Выйти
            </SideNavItem>
          </SideNav>
        </div>
      </Navbar>

    </>
  )
}
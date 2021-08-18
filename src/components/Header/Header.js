import './Header.css';

import React from 'react';
import { useLocation } from 'react-router-dom';
import NavigationMain from './NavigationMain/NavigationMain.js';
import Navigation from './Navigation/Navigation.js';
import Icon from './Icon/Icon.js';



function Header() {
  const { pathname } = useLocation();

  function colorHeader() {
    if (pathname === '/') {
      return {background: 'rgb(7, 48, 66)'}
    } else {
      return {background: 'rgb(255, 255, 255)'}
    }
  }

  return (
    <div className="Header" style={colorHeader()}>
      <Icon />
      {pathname === '/' ? <NavigationMain /> : <Navigation />}
    </div>
  );
}

export default Header;

// Header — компонент, который отрисовывает шапку сайта на страницу.

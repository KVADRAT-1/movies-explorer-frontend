import './Header.css';

import React from 'react';
import { useLocation } from 'react-router-dom';
import NavigationMain from './NavigationMain/NavigationMain.js';
import Navigation from './Navigation/Navigation.js';
import icon from '../../images/reusableImages/logo.svg';

function Header() {
  const { pathname } = useLocation();

  return (
    <div className='Header'>
      <img className='Header__icon' src={icon} alt={'icon'}/>
      {pathname === '/' ? <NavigationMain /> : <Navigation />}
    </div>
  );
}

export default Header;

// Header — компонент, который отрисовывает шапку сайта на страницу.

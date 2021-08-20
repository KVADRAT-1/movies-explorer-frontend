import './Header.css';

import React from 'react';
import { useLocation } from 'react-router-dom';
import NavigationMain from './NavigationMain/NavigationMain.js';
import Navigation from './Navigation/Navigation.js';
import iconMain from '../../images/Header/IconMain.svg';
import icon from '../../images/Header/Icon.svg';

function Header() {
  const { pathname } = useLocation();

  return (
    <div className="Header" style={pathname === '/' ? {background: 'rgb(7, 48, 66)'} : {background: 'rgb(255, 255, 255)'}}>
      <img className='Header__icon' src={pathname === '/' ? iconMain : icon} alt={'Иконка'}/>
      {pathname === '/' ? <NavigationMain /> : <Navigation />}
    </div>
  );
}

export default Header;

// Header — компонент, который отрисовывает шапку сайта на страницу.

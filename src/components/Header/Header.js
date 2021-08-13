import './Header.css';
import Navigation from './Navigation/Navigation.js';
import Icon from './Icon/Icon.js';

function Header() {
  return (
    <div className="Header">
      <Icon />
      <Navigation />
    </div>
  );
}

export default Header;

// Header — компонент, который отрисовывает шапку сайта на страницу.

import './Main.css';

import Promo from './Promo/Promo.js';
import AboutProject from './AboutProject/AboutProject.js';
import Techs from './Techs/Techs.js';
import AboutMe from './AboutMe/AboutMe.js';
import Portfolio from './Portfolio/Portfolio.js';
import NavTab from './NavTab/NavTab.js';

function Main() {
  return (
    <div className="Main">
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      ↑↑↑ Main ↑↑↑
    </div>
  );
}

export default Main;

// Main — компонент страницы «О проекте». 
// Он будет содержать только презентационные компоненты и в будущем, за исключением шапки навигации. 
// Вот так выглядит список компонентов, которые будут использоваться только на этой странице:
//      1. Promo — компонент с вёрсткой баннера страницы «О проекте».
//      2. NavTab — компонент с навигацией по странице «О проекте».
//      3. AboutProject — компонент с описанием дипломного проекта.
//      4. Techs — компонент с использованными технологиями.
//      5. AboutMe — компонент с информацией о студенте.
//      6. Portfolio — компонент со ссылками на другие проекты.

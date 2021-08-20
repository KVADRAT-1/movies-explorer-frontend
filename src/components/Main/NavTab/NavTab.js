import './NavTab.css';

function NavTab() {
  return (
    <div className='NavTab'>
      <ul className='NavTab__list'>
        <li className='NavTab__item'>
          <a className='NavTab__link' href='#AboutProject'>О проекте</a>
        </li>
        <li className='NavTab__item'>
          <a className='NavTab__link' href='#Techs'>Технологии</a>
        </li>
        <li className='NavTab__item'>
          <a className='NavTab__link' href='#AboutMe'>Студент</a>
        </li>
      </ul>
    </div>
  );
}

export default NavTab;

// NavTab — компонент с навигацией по странице «О проекте».

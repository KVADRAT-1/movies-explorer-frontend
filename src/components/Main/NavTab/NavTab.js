import './NavTab.css';

function NavTab() {
  return (
    <div className="NavTab">
        <a className='NavTab__link' href='#AboutProject'>О проекте</a>
        <a className='NavTab__link' href='#Techs'>Технологии</a>
        <a className='NavTab__link' href='#AboutMe'>Студент</a>
    </div>
  );
}

export default NavTab;

// NavTab — компонент с навигацией по странице «О проекте».

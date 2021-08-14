import './Techs.css';

function Techs() {
  return (
    <div className="Techs">
        <h2 className='Techs__title'>Технологии</h2>
        <article className='Techs__paragraph'>
          <h3 className='Tecs__paragraphh-title'>7 технологий</h3>
          <p className='Techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </article>
        <ul className='Techs__list'>
          <li className='Techs__item'>HTML</li>
          <li className='Techs__item'>CSS</li>
          <li className='Techs__item'>JS</li>
          <li className='Techs__item'>React</li>
          <li className='Techs__item'>Git</li>
          <li className='Techs__item'>Express.js</li>
          <li className='Techs__item'>mongoDB</li>
        </ul>
    </div>
  );
}

export default Techs;

// Techs — компонент с использованными технологиями.

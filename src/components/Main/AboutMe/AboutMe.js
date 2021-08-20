import './AboutMe.css';
import photo from '../../../images/trash/panda.jpg';

function AboutMe() {
  return (
    <div className="AboutMe" id='AboutMe'>
        <h2 className='AboutMe__title'>Студент</h2>
        <div className='AboutMe__student'>
        <img className='AboutMe__photo' src={photo} alt={'photoUser'}/>
          <article className='AboutMe__paragraph'>
            <h2 className='AboutMe__paragraph-title'>Владимир</h2>
            <h3 className='AboutMe__paragraph-subtitle'>Фронтенд-разработчик, 23 года</h3>
            <p className='AboutMe__paragraph-description'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. 
              У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. 
              Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
              После того, как прошёл курс по веб-разработке, 
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          <div className='AboutMe__websites'>
            <a className='AboutMe__link' href={'https://www.facebook.com/'} target='blank'>Facebook</a>
            <a className='AboutMe__link' href={'https://github.com/KVADRAT-1/'} target='blank'>Github</a>
          </div>
          </article>
        </div>
    </div>
  );
}

export default AboutMe;

// AboutMe — компонент с информацией о студенте.

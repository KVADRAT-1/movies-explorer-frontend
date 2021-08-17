import './Footer.css';

function Footer() {
  return (
    <div className='Footer'>
      <p className='Footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='Footer__flex'>
        <p className='Footer__copyright'>© 2021 Владимир Костин</p>
        <ul class='Footer__list'>
          <li className='Footer__item'>
            <a className='Footer__link' href='https://practicum.yandex.ru/' target='blank'>Яндекс.Практикум</a>
          </li>
          <li className='Footer__item'>
            <a className='Footer__link' href='https://github.com/KVADRAT-1/' target='blank'>Github</a>
          </li>
          <li className='Footer__item'>
            <a className='Footer__link' href='https://www.facebook.com/' target='blank'>Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

// Footer — презентационный компонент, который отрисовывает подвал.
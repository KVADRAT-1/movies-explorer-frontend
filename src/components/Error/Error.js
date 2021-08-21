import './Error.css';

import { Link } from 'react-router-dom';

function Error() {

  return (
    <div className="Error">
        <h1 className="Error__title">404</h1>
        <p className="Error__text">Страница не найдена</p>
        <Link className="Error__link-back" to='/'>Назад</Link>
    </div>
  );
}

export default Error;

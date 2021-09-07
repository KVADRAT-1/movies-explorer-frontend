import './Preloader.css';
import preloader from '../../../images/reusableImages/preloader.svg'

function Preloader({type}) {
  return (
    <div className="Preloader">
      <img src={preloader} alt='preloader'></img>
    </div>
  );
}

export default Preloader;

// Preloader — отвечает за работу прелоадера.
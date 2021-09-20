import './FilterCheckbox.css';
import switchNotActive from '../../../images/FilterCheckbox/FilterCheckbox__switch_not-active.svg';
import switchActive from '../../../images/FilterCheckbox/FilterCheckbox__switch_active.svg';

function FilterCheckbox({setFilterMovies, filterMovies}) {
  
  function switchFilterMovies() {
    setFilterMovies(!filterMovies);
  }

return (
    <div className="FilterCheckbox">
        <p className='FilterCheckbox__text'>Короткометражки</p>
        <img className='FilterCheckbox__button' src={filterMovies ? switchActive : switchNotActive} onClick={switchFilterMovies} alt={'switchButton'}/>
    </div>
  );
}

export default FilterCheckbox;
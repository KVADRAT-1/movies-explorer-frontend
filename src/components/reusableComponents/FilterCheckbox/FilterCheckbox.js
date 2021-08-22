import './FilterCheckbox.css';

import { useState } from 'react';

import switchNotActive from '../../../images/FilterCheckbox/FilterCheckbox__switch_not-active.svg';
import switchActive from '../../../images/FilterCheckbox/FilterCheckbox__switch_active.svg';

function FilterCheckbox() {
  const [toSwitchButton, setToSwitchButton] = useState(false);

  function switchButton() {
    setToSwitchButton(!toSwitchButton);
  }

  return (
    <div className="FilterCheckbox">
        <p className='FilterCheckbox__text'>Короткометражки</p>
        <img className='FilterCheckbox__button' src={toSwitchButton ? switchActive : switchNotActive} onClick={switchButton} alt={'switchButton'}/>
    </div>
  );
}

export default FilterCheckbox;
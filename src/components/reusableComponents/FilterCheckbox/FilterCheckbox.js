import './FilterCheckbox.css';

import { useState } from 'react';

import switchNotActive from '../../../images/FilterCheckbox/FilterCheckbox__switch_not-active.svg';
import switchActive from '../../../images/FilterCheckbox/FilterCheckbox__switch_active.svg';

function FilterCheckbox({switchFilter, filter}) {
return (
    <div className="FilterCheckbox">
        <p className='FilterCheckbox__text'>Короткометражки</p>
        <img className='FilterCheckbox__button' src={filter ? switchActive : switchNotActive} onClick={switchFilter} alt={'switchButton'}/>
    </div>
  );
}

export default FilterCheckbox;
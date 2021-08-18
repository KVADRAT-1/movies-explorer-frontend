import './Icon.css';

import iconMain from '../../../images/Header/IconMain.svg';
import icon from '../../../images/Header/Icon.svg';

import { useLocation } from 'react-router-dom';

function Icon() {
  const { pathname } = useLocation();
  return (
    <img className='Icon' src={pathname === '/' ? iconMain : icon} alt={'Иконка'}/>
  );
}

export default Icon;
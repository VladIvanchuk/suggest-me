import React from 'react';
import icon from '../../assets/images/icon.svg';

import s from './Logo.module.scss';

const Logo = () => (
  <a href="/home">
    <img
      src={icon}
      className={s.logo}
      alt="Suggest.me"
    />
  </a>
);

export default Logo;
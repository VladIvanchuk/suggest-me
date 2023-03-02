import React from 'react';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

import './header.scss';

export const Header = () => {
  return (
    <header className='header'>
            <div className="header__logo logo">
                <Logo></Logo>
            </div>
            <div className="header__navBar navBar">
                <NavBar></NavBar>
            </div>
    </header>
  )
}

export default Header;
import React from 'react';

import s from "./NavBar.module.scss";

const Navbar = ({children}) => (
  <nav className={s.navbar}>
    {children}
  </nav>
);

export default Navbar;
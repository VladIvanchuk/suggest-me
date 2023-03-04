import React from 'react';
import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import Menu from "../Menu/Menu";
import Navbar from "../NavBar/Navbar";

import s from "./Header.module.scss";

const Header = () => (
  <header className={s.header}>
    <Container>
      <Navbar>
        <Logo />
        <Menu />
      </Navbar>
    </Container>
  </header>
);

export default Header;
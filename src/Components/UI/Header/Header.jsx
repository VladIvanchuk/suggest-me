import React from "react";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

import s from "./Header.module.scss";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.header__logo}>
                    <Logo />
                </div>
                <div className={s.header__navBar}>
                    <NavBar />
                </div>
            </div>
        </header>
    );
};

export default Header;

import React from "react";

import s from "./navBar.module.scss";

import svgMaker from "../../svgMaker";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={s.navBar}>
      <Link href="/pixabay">Pixabay</Link>
      <a href="/">Movies</a>
      <a href="/">TV Shows</a>
      <a href="/">
        Suggest me <sub>{svgMaker("arrow", s.icon)}</sub>{" "}
      </a>
    </div>
  );
};

export default NavBar;

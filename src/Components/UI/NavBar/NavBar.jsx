import s from "./NavBar.module.scss";
import svgMaker from "../../../svgMaker";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={s.navBar}>
      <Link to="/pixabay">Pixabay</Link>
      <a href="/">Movies</a>
      <a href="/">TV Shows</a>
      <a href="/">
        Suggest me <span>{svgMaker("arrow", s.icon)}</span>{" "}
      </a>
    </div>
  );
};

export default NavBar;

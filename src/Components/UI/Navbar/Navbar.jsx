import s from "./Navbar.module.scss";
import arrow from "../../../assets/images/arrow-right.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={s.navbar}>
      <Link to="/" className={s.link}>
        Movies
      </Link>
      <Link to="/" className={s.link}>
        TV Shows
      </Link>
      <Link to="/" className={s.link}>
        Suggest me <img src={arrow} alt="" />
      </Link>
    </div>
  );
};

import s from "./Navbar.module.scss";
import arrow from "../../../assets/images/arrow-right.svg";

export const Navbar = () => {
  return (
    <div className={s.navbar}>
      <a href="/" className={s.link}>
        Movies
      </a>
      <a href="/" className={s.link}>
        TV Shows
      </a>
      <a href="/" className={s.link}>
        Suggest me <img src={arrow} alt="" />
      </a>
    </div>
  );
};

import s from "./Navbar.module.scss";
import right from "../../../assets/images/right.svg"

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <a href="/" className={s.link}>
        Movie
      </a>
      <a href="/" className={s.link}>
        TV Show
      </a>
      <a href="/" className={s.link}>
        Suggest me
      </a><img src={right} alt="arrow"/>
    </div>
  );
};

export default Navbar;

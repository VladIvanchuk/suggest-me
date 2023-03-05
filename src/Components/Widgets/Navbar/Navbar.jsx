import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <a href="/" className={s.link}>
        Movies
      </a>
      <a href="/" className={s.link}>
        TV Shows
      </a>
      <a href="/" className={s.link}>
        Suggest me
      </a>
    </div>
  );
};

export default Navbar;

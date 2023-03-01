import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <a href="/" className={s.link}>
        Movie
      </a>
      <a href="/" className={s.link}>
        TV Show
      </a>
    </div>
  );
};

export default Navbar;

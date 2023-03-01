import s from "./Logo.module.scss";
import icon from "../../../assets/images/icon-film.svg";

const Logo = () => {
  return (
    <div className={s.logo}>
      <img src={icon} alt="logo" />
      Filmoteka
    </div>
  );
};

export default Logo;

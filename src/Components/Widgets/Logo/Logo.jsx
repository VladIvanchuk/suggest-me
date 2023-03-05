import s from "./Logo.module.scss";
import icon from "../../../assets/images/logo.svg";

const Logo = () => {
  return (
    <div className={s.logo}>
      <img src={icon} alt="logo" />
    </div>
  );
};

export default Logo;

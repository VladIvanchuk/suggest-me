import s from "./Logo.module.scss";
import logo from"../../../assets/images/logo.svg";

const Logo = () => {
  return (
    <div className={s.logo}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;

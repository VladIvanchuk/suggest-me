import s from "./Logo.module.scss";
import icon from "../../../assets/images/logo.svg";

export const Logo = () => {
  return (
    <div className={s.logo}>
      <img src={icon} alt="logo" />
    </div>
  );
};

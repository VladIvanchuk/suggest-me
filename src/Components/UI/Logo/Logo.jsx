import s from "./Logo.module.scss";
import icon from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className={s.logo}>
      <img src={icon} alt="logo" />
    </Link>
  );
};

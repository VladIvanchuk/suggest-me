import { Link } from "react-router-dom";
import s from "./Button.module.scss";

export const Button = ({ name, link }) => {
  return (
    <Link className={s.primary} to={link}>
      <span>{name}</span>
    </Link>
  );
};

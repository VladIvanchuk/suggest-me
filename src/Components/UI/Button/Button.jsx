import s from "./Button.module.scss";

export const Button = ({ name }) => {
  return (
    <a className={s.primary} href="/">
      <span>{name}</span>
    </a>
  );
};

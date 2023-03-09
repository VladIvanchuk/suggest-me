import { Mark } from "../../";
import s from "./Movies.module.scss";

export const Movie = ({ name, mark }) => {
  return (
    <div className={s.card}>
      <Mark className={s.mark} mark={mark} />
      <div className={s.img}></div>
      <div className={s.name}>{name}</div>
    </div>
  );
};

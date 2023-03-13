import { Mark } from "../../";
import s from "./Movies.module.scss";

export const Movie = ({ name, mark, posterImg }) => {
  return (
    <div className={s.card}>
      <Mark className={s.mark} mark={8.3} />
      <div className={s.photo}>
        <img src={posterImg} alt="" />
      </div>
      <div className={s.name}>{name}</div>
    </div>
  );
};

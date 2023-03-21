import { Mark } from "../../";
import s from "./Movies.module.scss";

export const Movie = ({ title, rating, posterUrl }) => {
  return (
    <div className={s.card}>
      <Mark className={s.mark} mark={rating} />
      <div className={s.photo}>
        <img src={posterUrl} alt="" />
      </div>
      <div className={s.name}>{title}</div>
    </div>
  );
};

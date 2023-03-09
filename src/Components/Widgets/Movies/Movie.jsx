import { Star } from "../Star/Star";
import s from "./Movies.module.scss";

export const Movie = ({ name, star }) => {
  return (
    <div className={s.card}>
      <Star star={star} />
      <div className={s.img}></div>
      <div className={s.name}>{name}</div>
    </div>
  );
};

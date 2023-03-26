import { Mark } from "../../";
import s from "./Movies.module.scss";

export const Movie = ({ title, rating, poster }) => {
  return (
    <div className={`${s.card} ${!title && s.card_loader}`}>
      <Mark className={`${s.mark} ${!rating && s.mark_loader}`} mark={rating} />
      <div
        className={`${s.photo} ${!poster && s.photo_loader}`}
        style={{ backgroundImage: `url(${poster})` }}
      ></div>
      <div className={s.name}>
        {title}
        <div className={s.name_loader}>
          <div className={s.name_none}></div>
          <div className={s.bottom}>
            <div className={s.dot}></div>
            <div className={s.name_none}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

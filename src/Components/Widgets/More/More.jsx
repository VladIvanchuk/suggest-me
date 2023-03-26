import { Button } from "../../UI/Button/Button";
import s from "./More.module.scss";

export const More = ({ getMoreMovies }) => {
  return (
    <div className={s.wrapper}>
      <h3>Didn’t find the one you’re looking for?</h3>
      <div className={s.primary} onClick={getMoreMovies}>
        <span>Suggest more</span>
      </div>
    </div>
  );
};

import s from "./Card.module.scss";
import { Mark } from "../..";

const Card = ({ data = {} }) => {
  const { mark, movieType, posterAvatar } = data;

  return (
    <div className={s.Card}>
      <div className={s.image}>
        <div className={s.mark}>
          <Mark markNum={mark} />
        </div>
        <img src={posterAvatar} alt="poster" />
      </div>
      <div className={s.filmName}>{movieType}</div>
    </div>
  );
};

export default Card;

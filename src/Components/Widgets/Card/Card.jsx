import s from "./Card.module.scss";
import { Mark } from "../..";

const Card = ({data = {}}) => {
  const {posterAvatar, movieName, mark} = data;

  return (
    <div className={s.Card}>
      <div className={s.image}>
        <img src={posterAvatar} alt="poster" />
        <Mark markNum = {mark}/>
      </div>
      <div className={s.filmName}>{movieName}</div>
    </div>
  );
};

export default Card;

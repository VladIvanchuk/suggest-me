import s from "./Card.module.scss";
import { Mark } from "../..";

const Card = (data) => {
  return (
    <div className={s.Card}>
      <div className={s.image}>
        <img src={`https://image.tmdb.org/t/p/w500${data.data.poster_path}`} alt="" />
        <Mark markNum = {data.data.vote_average}/>
      </div>
      <div className={s.filmName}>{data.data.title}</div>
    </div>
  );
};

export default Card;

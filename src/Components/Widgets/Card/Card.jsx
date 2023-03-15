import s from "./Card.module.scss";
import { Mark } from "../..";
import imageBcg from "./../../../assets/images/imageBcg.png"

const Card = ({ data = {} }) => {
  const { mark, movieName } = data;

  return (
    <div className={s.Card}>
      <div className={s.image}>
        <div className={s.mark}>
          <Mark markNum={mark} />
        </div>
        <img src={imageBcg} alt="poster" />
      </div>
      <div className={s.filmName}>{movieName}</div>
    </div>
  );
};

export default Card;

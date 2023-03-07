import s from "./Card.module.scss";
import { Mark } from "../../Components";


const Card = ({filmName}) => {
  return (
    <div className={s.Card}>
      <div className={s.image}>
        <Mark />
      </div>
      <div className={s.filmName}>{filmName}</div>
    </div>
  );
};

export default Card;

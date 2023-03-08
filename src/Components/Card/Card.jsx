import s from "./Card.module.scss";
import { Mark } from "../../Components";


const Card = ({filmName, markNum}) => {
  return (
    <div className={s.Card}>
      <div className={s.image}>
        <Mark markNum = {markNum}/>
      </div>
      <div className={s.filmName}>{filmName}</div>
    </div>
  );
};

export default Card;

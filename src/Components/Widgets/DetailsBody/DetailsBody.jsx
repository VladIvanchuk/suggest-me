import { Mark } from "../../UI/Mark/Mark";
import s from "./DetailsBody.module.scss";

export const DetailsBody = ({
  img,
  quote,
  description,
  mark,
  type,
  date,
  time,
  genres,
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.photo}>
        <img src={img} alt="" />
      </div>
      <div className={s.info}>
        <h3>{quote}</h3>
        <p>{description}</p>
        <Mark className={s.mark} mark={mark} />
        <div>
          <div className={s.title}>Type</div>
          <div className={s.text}>{type}</div>
        </div>
        <div>
          <div className={s.title}>Release Date:</div>
          <div className={s.text}>{date}</div>
        </div>
        <div>
          <div className={s.title}>Run time</div>
          <div className={s.text}>{time}</div>
        </div>
        <div>
          <div className={s.title}>Genres</div>
          <div className={s.text}>{genres}</div>
        </div>
      </div>
    </div>
  );
};

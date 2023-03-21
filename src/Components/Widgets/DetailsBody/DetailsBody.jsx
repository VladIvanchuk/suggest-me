import { Mark } from "../../UI/Mark/Mark";
import s from "./DetailsBody.module.scss";

export const DetailsBody = (props) => {
  const { posterUrl, tagline, description, rating, type, releaseDate, runtime, genres } =
    props;
  return (
    <div className={s.wrapper}>
      <div className={s.photo}>
        <img src={posterUrl} alt="" />
      </div>
      <div className={s.info}>
        <h3>{tagline}</h3>
        <p>{description}</p>
        <Mark className={s.mark} mark={rating} />
        <div>
          <div className={s.title}>Type</div>
          <div className={s.text}>{type}</div>
        </div>
        <div>
          <div className={s.title}>Release Date:</div>
          <div className={s.text}>{releaseDate?.split("T")[0]}</div>
        </div>
        <div>
          <div className={s.title}>Run time</div>
          <div className={s.text}>{runtime}</div>
        </div>
        <div>
          <div className={s.title}>Genres</div>
          <div className={s.text}>
            {genres?.map(
              (genre, i) => genre.name + (i !== genres.length - 1 ? ", " : "")
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

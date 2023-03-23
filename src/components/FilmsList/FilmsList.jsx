import s from "./FilmsList.module.scss";
import Film from "../Film/Film";
const FilmsList = ({movieList}) => (
  <div className={s.filmsList}>
    {movieList.map(({title, _id, posterUrl, rating}) => (
      <Film key={_id} title={title} id={_id} img={posterUrl} rate={Math.round(rating)}/>
    ))}
  </div>
);

export default FilmsList;

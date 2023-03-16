import s from "./FilmsList.module.scss";
import Film from "../Film/Film";
import Films from "./ListOfFilms.json";
const FilmsList = () => (
  <div className={s.filmsList}>
    {Films.map(({title, id, img, rate}) => (
      <Film key={id} title={title} id={id} img={img} rate={rate}/>
    ))}
  </div>
);

export default FilmsList;

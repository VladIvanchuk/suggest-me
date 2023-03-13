import { Link } from "react-router-dom";
import { Movie } from "./Movie";
import s from "./Movies.module.scss";
import movies from "../../../mock/movies.json";

export const MoviesWrapper = () => {
  return (
    <div className={s.wrapper}>
      {movies.map((movie) => (
        <Link className={s.link} to={`/details/${movie.id}`} key={movie.id}>
          <Movie {...movie} />
        </Link>
      ))}
    </div>
  );
};

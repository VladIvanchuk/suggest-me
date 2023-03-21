import { Link } from "react-router-dom";
import { Movie } from "./Movie";
import s from "./Movies.module.scss";

export const MoviesWrapper = ({ movies }) => {
  return (
    <div className={s.wrapper}>
      {movies.map((movie) => (
        <Link className={s.link} to={`/details/${movie._id}`} key={movie._id}>
          <Movie {...movie} />
        </Link>
      ))}
    </div>
  );
};

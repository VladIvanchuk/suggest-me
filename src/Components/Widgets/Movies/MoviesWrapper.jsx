import { Link } from "react-router-dom";
import { Movie } from "./Movie";
import s from "./Movies.module.scss";

export const MoviesWrapper = ({ movies }) => {
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

  if (!movies) {
    return (
      <div className={s.wrapper}>
        {myArray.map((movie, i) => (
          <div className={s.link} key={i}>
            <Movie />
          </div>
        ))}
      </div>
    );
  }
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

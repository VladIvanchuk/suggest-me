import s from "./Wrapper.module.scss";
import { Card } from "../../index";
import { Link } from "react-router-dom";
import { movies } from "../../../movies";
import { useEffect, useState } from "react";

const Wrapper = ({ movies }) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    setMovieList(movies);
  }, [movies]);

  useEffect(() => {
    // const movie = movies.find((el) => el.id === Number(params.id));

    const getMovie = async () => {
      const response = await fetch(
        `https://movie-w83k.onrender.com/tmdb/movie?limit=8?genre=action`
      );

      const movies = await response.json();

      setMovieList(movies);
    };

    getMovie();
    // setMovie(movie);
  }, []);

  return (
    <div className={s.Wrapper}>
      {movieList.map((movie) => (
        <Link to={`/details/${movie.id}`} key={movie.id}>
          <Card data={movie} />
        </Link>
      ))}
    </div>
  );
};

export default Wrapper;

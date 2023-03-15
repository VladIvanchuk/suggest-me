import s from "./Wrapper.module.scss";
import { Card } from "../../index";
import { Link } from "react-router-dom";

// import { movies } from "../../../movies";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Wrapper = () => {
  const [movie, setMovie] = useState([]);

  const params = useParams();
  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=3b76611b97ee9546a88b0238260eed97&language=en-US&page=1`
        );

        const data = await response.json();
        // console.log(data);
        setMovie(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
    // console.log(movie);
  }, [params]);

  return (
    <div className={s.Wrapper}>
      {movie.slice(0, 8).map((movie) => (
        <Link to={`/details/${movie.id}`} key={movie.id}>
          <Card data={movie} />
        </Link>
      ))}
    </div>
  );
};

export default Wrapper;

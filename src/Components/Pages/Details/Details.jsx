import s from "./Details.module.scss";
import { DetailsPoster, DetailsInfo } from "../../index";
import { useParams } from "react-router-dom";
import { movies } from "../../../movies";
import { useEffect, useState } from "react";

const Details = () => {
  const [movie, setMovie] = useState({});

  const params = useParams();

  useEffect(() => {
    // const movie = movies.find((el) => el.id === Number(params.id));

    const getMovie = async () => {
      const response = await fetch(
        `https://movie-w83k.onrender.com/tmdb/movie/${params.id}`
      );

      const movie = await response.json();

      setMovie(movie);
    };

    getMovie();
    // setMovie(movie);
  }, [params]);

  return (
    <div className={s.details}>
      <DetailsPoster
        movieType={movie.movieType}
        movieName={movie.movieName}
        poster={movie.poster}
      />
      <DetailsInfo
        posterAvatar={movie.posterAvatar}
        qoute={movie.qoute}
        desc={movie.desc}
        markNum={movie.mark}
        type={movie.type}
        releaseDate={movie.releaseDate}
        runTime={movie.runTime}
        genres={movie.genres}
      />
    </div>
  );
};

export default Details;

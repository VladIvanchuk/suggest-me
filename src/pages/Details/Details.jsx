import FilmCover from "../../components/FilmCover/FilmCover";
import FilmInfo from "../../components/FilmInfo/FilmInfo";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import s from "./Details.module.scss";

const Details = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      const response = await fetch(
        `https://movie-w83k.onrender.com/tmdb/movie/${params.id}`
      );
      const data = await response.json();
      setMovie(data);
    }
    getMovieDetails();
  }, [params.id]);

  console.log("movie - ", movie);

  return (
    <main className={s.details}>
      <FilmCover title={movie.title}/>
      <FilmInfo film={movie}/>
    </main>
  );
};

export default Details;

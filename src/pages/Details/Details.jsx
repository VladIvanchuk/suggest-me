import FilmCover from "../../components1/FilmCover/FilmCover";
import FilmInfo from "../../components1/FilmInfo/FilmInfo";
import allFilms from "../../data/allFilms.json";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import s from "./Details.module.scss";

const Details = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    const movie = allFilms.find((movie) => movie.id === +params.id)
    setMovie(movie);
  }, [params]);

  console.log(movie);

  return (
    <main className={s.details}>
      <FilmCover title={movie.title}/>
      <FilmInfo rate={movie.rate}/>
    </main>
  );
};

export default Details;

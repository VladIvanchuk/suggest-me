import s from "./Details.module.scss";

import { DetailsPoster, DetailsInfo } from "../../index";
import { useParams } from "react-router-dom";

import { movies } from "../../../movies";
import { useEffect, useState } from "react";


const Details = () => {
  const [movie, setMovie] = useState({});

  const params = useParams();
  useEffect(() => {
    // const getMovie = async () => {
    //   try {
    //     const response = await fetch(
    //       `https://api.themoviedb.org/3/movie/${params.id}?api_key=3b76611b97ee9546a88b0238260eed97&language=en-US`
    //     );

    //     const data = await response.json();
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // getMovie();

    const movie = movies.find((el) => el.id === Number(params.id));

    setMovie(movie);
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

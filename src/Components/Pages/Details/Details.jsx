import s from "./Details.module.scss";
import { DetailsPoster, DetailsInfo } from "../../index";
import Poster from "../../../assets/images/Poster.png";
import PosterAvatar from "../../../assets/images/PosterAvatar.png";
import { useParams } from "react-router-dom";
import { movies } from "../../../movies";
import { useEffect, useState } from "react";

const movieInfo = {
  id: 0,
  movieType: "Action",
  movieName: "Avengers: Endgame",
  poster: Poster,
  posterAvatar: PosterAvatar,
  qoute: "Part of the journey is the end.",
  desc: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos actions and restore order to the universe once and for all, no matter what consequences may be in store.",
  mark: 8.3,
  type: "Movie",
  releaseDate: "2019-04-24",
  runTime: "181 min",
  genres: "Adventure,  Science Fiction, Action",
};

const Details = () => {
  const [movie, setMovie] = useState({});

  const params = useParams();

  useEffect(() => {
    // const getMovie = async () => {
    //   try {
    //     const response = await fetch(
    //       `https://api.themoviedb.org/3/movie/${params.id}?api_key=2b3e1b0b0b1b1b1b1b1b1b1b1b1b1b1b&language=en-US`
    //     );

    //     const data = await response.json();
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
        movieName={movie.movieType}
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

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsHero, DetailsBody } from "../";
import movies from "../../mock/movies.json";

export const Details = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const movie = movies.find((el) => el.id === Number(params.id));

    setMovie(movie);
  }, [params]);

  return (
    <>
      <DetailsHero genre={movie.mainGenre} name={movie.name} img={movie.posterImg} />
      <DetailsBody
        img={movie.img}
        quote={movie.quote}
        description={movie.description}
        mark={movie.mark}
        type={movie.type}
        date={movie.date}
        time={movie.time}
        genres={movie.genres}
      />
    </>
  );
};

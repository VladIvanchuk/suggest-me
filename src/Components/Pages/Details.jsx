import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsHero, DetailsBody } from "../";
import { api } from "../../api/api";

export const Details = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});

  console.log(movie);

  useEffect(() => {
    const getMovieList = async () => {
      const data = await api.getMovieById(params.id);

      setMovie(data);
    };
    getMovieList();
  }, [params.id]);

  return (
    <>
      <DetailsHero {...movie} />
      <DetailsBody {...movie} />
    </>
  );
};

import { useEffect, useState } from "react";
import { MoviesWrapper, Filter, SuggestMe, More } from "..";
import { api } from "../../api/api";
export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      const data = await api.getMovies(8);

      setMovies(data);
    };
    getMovieList();
  }, []);

  return (
    <>
      <SuggestMe />
      <Filter />
      <MoviesWrapper movies={movies} />
      <More />
    </>
  );
};

import { useEffect, useState } from "react";
import { MoviesWrapper, Filter, SuggestMe, More } from "..";
import { api } from "../../api/api";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [pending, setPending] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("");

  const getMovieList = async (count, genre) => {
    setMovies([]);
    setPending(true);
    const data = await api.getMoviesByGenre(count, genre);
    setMovies(data);
    setPending(false);
    console.log(data);
  };

  useEffect(() => {
    getMovieList(8, selectedGenre);
  }, [selectedGenre]);

  return (
    <>
      <SuggestMe />
      <Filter length={movies.length} setSelectedGenre={setSelectedGenre} />
      <MoviesWrapper movies={!pending && movies} />
      <More getMoreMovies={() => getMovieList(8, selectedGenre)} />
    </>
  );
};

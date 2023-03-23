import Categories from "../Categories/Categories";
import FilmsList from "../FilmsList/FilmsList";
import Container from "../Container/Container";

import s from "./Catalog.module.scss"
import {useEffect, useState} from "react";

const Catalog = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        `https://movie-w83k.onrender.com/tmdb/movie?limit=8`
      );
      const data = await response.json();

      setMovieList(data);
    };
    getMovies();
  }, [])

  console.log(movieList)
  return (
    <section className={s.catalog}>
      <Container>
        <Categories />
        <h2 className={s.catalog__title}>
          Any <sub>(120)</sub>
        </h2>
        <FilmsList movieList={movieList}/>
      </Container>
    </section>
  )
};

export default Catalog;
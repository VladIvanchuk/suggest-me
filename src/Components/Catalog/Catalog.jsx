import Categories from "../Categories/Categories";
import FilmsList from "../FilmsList/FilmsList";
import Container from "../Container/Container";

import s from "./Catalog.module.scss"

const Catalog = () => (
  <section className={s.catalog}>
    <Container>
      <Categories />
      <h2 className={s.catalog__title}>
        Any <sub>(120)</sub>
      </h2>
      <FilmsList />
    </Container>
  </section>
);

export default Catalog;
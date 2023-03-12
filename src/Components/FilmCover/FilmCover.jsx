import Container from "../Container/Container";

import s from "./FilmCover.module.scss"

const FilmCover = () => {
  return (
    <div className={s.filmCover}>
      <Container>
        <section className={s.filmCover__image}>
          <div className={s.filmCover__info}>
            <span className={s.filmCover__action}>
              Action
            </span>

            <h1 className={s.filmCover__title}>
              Avengers: Endgame
            </h1>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default FilmCover;

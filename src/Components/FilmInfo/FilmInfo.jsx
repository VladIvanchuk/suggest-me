import filmImg from "./../../assets/images/Avengers-Endgame.png";

import s from "./FilmInfo.module.scss";
import Container from "../Container/Container";
import Rate from "../Rate/Rate";

const FilmInfo = () => {
  return (
    <Container>
      <div className={s.filmInfo}>
        <section className={s.filmInfo__picture}>
          <img src={filmImg} alt="Avengers Endgame" className={s.filmInfo__image} />
        </section>
        <section className={s.filmInfo__describe}>
          <h2 className={s.filmInfo__title}>
            Part of the journey is the end.
          </h2>
          <p className={s.filmInfo__description}>
            After the devastating events of Avengers: Infinity War,
            the universe is in ruins due to the efforts of the Mad Titan,
            Thanos. With the help of remaining allies, the Avengers must
            assemble once more in order to undo Thanos' actions and restore
            order to the universe once and for all, no matter what
            consequences may be in store.
          </p>
          <Rate rate={8.3}/>

          <div className={s.filmInfo__info}>
            <h3 className={s.filmInfo__category}>
              Type
            </h3>

            <p className={s.filmInfo__text}>
              Movie
            </p>
          </div>

          <div className={s.filmInfo__info}>
            <h3 className={s.filmInfo__category}>
              Release Date:
            </h3>
            <p className={s.filmInfo__text}>
              2019-04-24
            </p>
          </div>

          <div className={s.filmInfo__info}>
            <h3 className={s.filmInfo__category}>
              Run time
            </h3>
            <p className={s.filmInfo__text}>
              181 min
            </p>
          </div>

          <div className={s.filmInfo__info}>
            <h3 className={s.filmInfo__category}>
              Genres
            </h3>
            <p className={s.filmInfo__text}>
              Adventure,  Science Fiction, Action
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default FilmInfo;

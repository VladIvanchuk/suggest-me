import { Movie } from "./Movie";
import s from "./Movies.module.scss";

const movies = [
  { id: 0, name: "Black Widow", mark: 6.8 },
  { id: 1, name: "Shang Chi", mark: 7.9 },
  { id: 2, name: "Loki", mark: 8.4 },
  { id: 3, name: "How I Met Your Mother", mark: 8.3 },
  { id: 4, name: "Money Heist", mark: 8.3 },
  { id: 5, name: "Friends", mark: 8.8 },
  { id: 6, name: "The Big Bang Theory", mark: 8.1 },
  { id: 7, name: "Two And a Half Men", mark: 7 },
];

export const Wrapper = () => {
  return (
    <>
      <h2 className={s.header}>
        Any <span>(120)</span>
      </h2>
      <div className={s.wrapper}>
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

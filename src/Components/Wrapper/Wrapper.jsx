import s from "./Wrapper.module.scss";
import { Card } from "../../Components";

const movies = [
  { name: "Black Widow", mark: 6.8 },
  { name: "Shang Chi", mark: 7.9 },
  { name: "Loki", mark: 8.4 },
  { name: "How I Met Your Mother", mark: 8.3 },
  { name: "Money Heist", mark: 8.3 },
  { name: "Friends", mark: 8.8 },
  { name: "The Big Bang Theory", mark: 8.1 },
  { name: "Two And a Half Men", mark: 7 },
];

const Wrapper = () => {
  return (
    <div className={s.Wrapper}>
      {movies.map((movie) => (
        <div className={s.Card}>
          <Card filmName={movie.name} markNum={movie.mark} />
        </div>
      ))}
    </div>
  );
};

export default Wrapper;

import s from "./Wrapper.module.scss";
import { Card } from "../../index";
import { Link } from "react-router-dom";
import { movies } from "../../../movies";

const Wrapper = () => {
  return (
    <div className={s.Wrapper}>
      {movies.map((movie) => (
        <Link to={`/details/${movie.id}`} key={movie.id}>
          <Card data={movie} />
        </Link>
      ))}
    </div>
  );
};

export default Wrapper;

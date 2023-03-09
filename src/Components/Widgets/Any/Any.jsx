import s from "./Any.module.scss";
import { useState } from "react";

const genres = ["Any", "Action", "Horror", "Drama", "Comedy"];

export const Any = () => {
  const [selected, setSelected] = useState(genres[0]);

  return (
    <div className={s.genre}>
      {genres.map((genre, i) => (
        <button
          key={i}
          className={selected === genre ? s.active : ""}
          onClick={() => setSelected(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

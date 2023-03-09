import s from "./Filter.module.scss";
import { useState } from "react";

const genres = ["Any", "Action", "Horror", "Drama", "Comedy"];

export const Filter = () => {
  const [selected, setSelected] = useState(genres[0]);

  return (
    <>
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
      <h2 className={s.header}>
        {selected} <span>(120)</span>
      </h2>
    </>
  );
};

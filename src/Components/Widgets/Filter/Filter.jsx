import s from "./Filter.module.scss";
import { useState } from "react";

const genres = [
  { name: "any", title: "Any" },
  { name: "action", title: "Action" },
  { name: "horror", title: "Horror" },
  { name: "drama", title: "Drama" },
  { name: "comedy", title: "Comedy" },
];

export const Filter = ({ length, setSelectedGenre }) => {
  const [selected, setSelected] = useState(genres[0]);

  const handleClick = (genre) => {
    setSelected(genre);
    setSelectedGenre(genre.name);
  };

  return (
    <>
      <div className={s.genre}>
        {genres.map((genre) => (
          <button
            key={genre.name}
            className={selected === genre ? s.active : ""}
            onClick={() => handleClick(genre)}
          >
            {genre.title}
          </button>
        ))}
      </div>
      <h2 className={s.header}>
        {selected.title} <span>{length !== 0 && `(${length})`}</span>
      </h2>
    </>
  );
};

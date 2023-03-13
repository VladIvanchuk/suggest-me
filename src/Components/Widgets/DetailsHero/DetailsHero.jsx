import s from "./DetailsHero.module.scss";

export const DetailsHero = ({ genre, name, img }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.photo}>
        <img src={img} alt="" />{" "}
      </div>
      <div className={s.info}>
        <span className={s.genre}>{genre}</span>
        <h2 className={s.name}>{name}</h2>
      </div>
    </div>
  );
};

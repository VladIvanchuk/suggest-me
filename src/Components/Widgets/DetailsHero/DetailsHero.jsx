import s from "./DetailsHero.module.scss";

export const DetailsHero = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.photo}>
        <div className={s.info}>
          <span className={s.genre}>Action</span>
          <h2 className={s.name}>Avengers: Endgame</h2>
        </div>
      </div>
    </div>
  );
};

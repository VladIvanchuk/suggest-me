import s from "./DetailsHero.module.scss";

export const DetailsHero = (props) => {
  const { genres, title, backdrop } = props;
  return (
    <div className={s.wrapper}>
      <div className={s.photo}>
        <img src={backdrop} alt="" />
      </div>
      <div className={s.info}>
        <span className={s.type}>
          {genres?.map((genre, i) => genre + (i !== genres.length - 1 ? ", " : ""))}
        </span>
        <h2 className={s.name}>{title}</h2>
      </div>
    </div>
  );
};

import s from "./DetailsPoster.module.scss";
const DetailsPoster = ({ data }) => {
  return (
    <div className={s.detailsPoster}>
      <div className={s.poster}>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt=""
        />

        <div className={s.info}>
          <span className={s.movieType}>{data?.genres[0]?.name}</span>
          <h2 className={s.movieName}>{data.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default DetailsPoster;

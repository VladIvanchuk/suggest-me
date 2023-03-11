import s from './DetailsPoster.module.scss';
const DetailsPoster = ({movieType,movieName,poster}) => {
  return (
    <div className={s.detailsPoster}>
        <div className={s.poster} >
            <img src={poster} alt="poster" />
            <div className={s.info}>
                <span className={s.movieType}>{movieType}</span>
                <h2 className={s.movieName}>{movieName}</h2>
            </div>
        </div>
    </div>
  )
}

export default DetailsPoster
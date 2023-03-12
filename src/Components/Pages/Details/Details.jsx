import s from "./Details.module.scss";
import { DetailsPoster, DetailsInfo } from "../../index";
import Poster from "../../../assets/images/Poster.png";
import PosterAvatar from "../../../assets/images/PosterAvatar.png";

const movieInfo = [
  {
    id: 0,
    movieType: "Action",
    movieName: "Avengers: Endgame",
    poster: Poster,
    posterAvatar: PosterAvatar,
    qoute: "Part of the journey is the end.",
    desc: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    mark: 8.3,
    type: "Movie",
    releaseDate: "2019-04-24",
    runTime: "181 min",
    genres: "Adventure,  Science Fiction, Action",
  },
];
const Details = () => {
  return (
    <div className={s.details}>
      <DetailsPoster
        movieType={movieInfo[0].movieType}
        movieName={movieInfo[0].movieName}
        poster={movieInfo[0].poster}
      />
      <DetailsInfo
        posterAvatar={movieInfo[0].posterAvatar}
        qoute={movieInfo[0].qoute}
        desc={movieInfo[0].desc}
        markNum={movieInfo[0].mark}
        type={movieInfo[0].type}
        releaseDate={movieInfo[0].releaseDate}
        runTime={movieInfo[0].runTime}
        genres={movieInfo[0].genres}


      />
    </div>
  );
};

export default Details;

import s from "./DetailInfo.module.scss";

import { Mark } from "../../index";

const DetailsInfo = ({
  posterAvatar,
  qoute,
  desc,
  markNum,
  type,
  releaseDate,
  runTime,
  genres,
}) => {
  return (
    <div className={s.detailInfo}>
      <div className={s.left}>
        <img src={posterAvatar} alt="posterAvatar" />
      </div>
      <div className={s.right}>
        <div className={s.qoute}>{qoute}</div>
        <div className={s.desc}>{desc}</div>
        <Mark markNum={markNum} />
        <div className={s.smallInfo}>
          <span className={s.infoType}>Type</span>
          <span className={s.infoTypeResult}>{type}</span>
        </div>
        <div className={s.smallInfo}>
          <span className={s.infoType}>Release Date:</span>
          <span className={s.infoTypeResult}>{releaseDate}</span>
        </div>
        <div className={s.smallInfo}>
          <span className={s.infoType}>Run time</span>
          <span className={s.infoTypeResult}>{runTime}</span>
        </div>
        <div className={s.smallInfo}>
          <span className={s.infoType}>Genres</span>
          <span className={s.infoTypeResult}>{genres}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsInfo;

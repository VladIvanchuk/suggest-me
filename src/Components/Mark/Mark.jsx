import svgMaker from "../../svgMaker";

import s from "./Mark.module.scss";

const Mark = () => {
  return (
    <div className={s.mark}>
      <div className={s.mark__bcg}>
        {svgMaker("star", s.icon)}
        <span>6.8</span>
      </div>
    </div>
  );
};

export default Mark;

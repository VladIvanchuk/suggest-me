import { svgMaker } from "../../../svgMaker";

import s from "./Mark.module.scss";

export const Mark = ({ mark }) => {
  return (
    <div className={s.wrapper}>
      {svgMaker("star", s.icon)}
      <span>{mark}</span>
    </div>
  );
};

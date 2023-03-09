import { svgMaker } from "../../../svgMaker";

import s from "./Mark.module.scss";

export const Mark = ({ className, mark }) => {
  return (
    <div className={`${s.wrapper} ${className}`}>
      {svgMaker("star", s.icon)}
      <span>{mark}</span>
    </div>
  );
};

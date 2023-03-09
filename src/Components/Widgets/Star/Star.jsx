import { svgMaker } from "../../../svgMaker";

import s from "./Star.module.scss";

export const Star = ({ star }) => {
  return (
    <div className={s.wrapper}>
      {svgMaker("star", s.icon)}
      <span>{star}</span>
    </div>
  );
};

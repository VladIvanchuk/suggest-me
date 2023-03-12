import s from "./Rate.module.scss";
import SvgMaker from "./../SvgMaker/SvgMaker"

const Rate = ({rate}) => (
  <div className={s.rate}>
    {SvgMaker("icon-star-empty", s.rate__icon)}
    <span className={s.rate__amount}>{rate}</span>
  </div>
);

export default Rate;
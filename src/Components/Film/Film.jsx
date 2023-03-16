import s from "./Film.module.scss";
import Rate from "../Rate/Rate";

import BlackWidow from "./../../assets/images/Black-Widow.png";
import ShangChi from "./../../assets/images/Shang-Chi.png";
import Loki from "./../../assets/images/Loki.png";
import HowMeet from "./../../assets/images/How-i-meet-your-mother.png";
import MoneyHeist from "./../../assets/images/Money-Heist.png";
import Friends from "./../../assets/images/Friends.png";
import BigBang from "./../../assets/images/Big-Bang.png";
import TwoMan from "./../../assets/images/Two-Man.png";
import {Link} from "react-router-dom";

const allFilms = [
  BlackWidow,
  ShangChi,
  Loki,
  HowMeet,
  MoneyHeist,
  Friends,
  BigBang,
  TwoMan
];

const Film = ({id, title, rate}) => (
  <li>
    <Link className={s.film} to={`/details/${id}`}>
      <div className={s.film__rate}>
        <Rate rate={rate} />
      </div>
      <img
        className={s.film__image}
        src={allFilms[id]}
        alt={title}
      />
      <h3 className={s.film__title}>{title}</h3>
    </Link>
  </li>
);

export default Film;

import s from "./Body.module.scss";
import { MoviesWrapper, Filter, SuggestMe, More } from "../";
export const Body = () => {
  return (
    <div className={s.body}>
      <SuggestMe />
      <Filter />
      <MoviesWrapper />
      <More />
    </div>
  );
};

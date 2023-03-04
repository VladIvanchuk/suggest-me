import s from "./Body.module.scss";
import { SuggestMe } from "../";
export const Body = () => {
  return (
    <div className={s.body}>
      <SuggestMe />
    </div>
  );
};

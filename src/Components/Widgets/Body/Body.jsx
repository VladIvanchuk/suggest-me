import s from "./Body.module.scss";
import {Wrapper, Any, SuggestMe, Footer } from "../";
export const Body = () => {
  return (
    <div className={s.body}>
      <SuggestMe />
      <Any />
      <Wrapper />
      <Footer />
    </div>
  );
};

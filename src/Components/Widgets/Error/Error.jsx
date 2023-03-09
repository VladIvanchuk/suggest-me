import s from "./Error.module.scss";
import img from "../../../assets/images/404.png";
import { Button } from "../../";

export const Error = () => {
  return (
    <div className={s.wrapper}>
      <img src={img} alt="" />
      <div className={s.text}>
        <h1>Lost your way?</h1>
        <p>
          Oops! This is awkward. You are looking for something that doesn't actually
          exist.
        </p>
      </div>
      <Button name="Go Home" />
    </div>
  );
};

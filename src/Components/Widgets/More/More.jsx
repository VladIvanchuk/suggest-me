import { Button } from "../../UI/Button/Button";
import s from "./More.module.scss";

export const More = () => {
  return (
    <div className={s.wrapper}>
      <h3>Didin’t find the one you looking for?</h3>
      <Button name={"Suggest more"} />
    </div>
  );
};

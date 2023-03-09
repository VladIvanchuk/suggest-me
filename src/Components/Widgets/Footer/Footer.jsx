import { Button } from "../Button/Button";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={s.wrapper}>
      <h3>Didin’t find the one you looking for?</h3>
      <Button name={"Suggest more"} />
    </div>
  );
};

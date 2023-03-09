import s from "./Header.module.scss";
import { Navbar, Logo } from "../../";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

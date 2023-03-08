import s from "./Navbar.module.scss";
import icon from "../../../assets/images/logo.svg";
import icon2 from "../../../assets/images/arrow-right.svg";

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <a href="/" className={s.link}>
                Movies
            </a>
            <a href="/" className={s.link}>
                TV Shows
            </a>
            <a href="/" className={s.link}>
                Suggest me

            </a>
            <img src={icon2} alt="arrow-right" />

        </div>
    );
};

export default Navbar;

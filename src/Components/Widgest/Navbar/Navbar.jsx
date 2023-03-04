import s from "./Navbar.module.scss";
import icon from "../../../aseest/images/arrow-right.svg"
const Navbar =( ) =>{
    return(
        <div className={s.navbar}>
            <a href="/" className={s.link}>Movies </a>
            <a href="/" className={s.link}>TV Shows </a>
            <a href="/" className={s.link}>Sugget me </a><img src={icon} alt="arrow"/>
            
        </div>
    )
}
export default Navbar;
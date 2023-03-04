import s from "./Logo.module.scss"
import icon from "../../../aseest/images/icon.svg"


const Logo =( ) =>{
    return(
        <div className={s.logo}>  
            <img src={icon} alt="logo"/>
        </div>
    )
}
export default Logo;
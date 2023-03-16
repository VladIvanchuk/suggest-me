import classNames from "classnames";
import rightArrow from "../../assets/images/arrow-right.svg";
import listMenu from './ListMenu.json';

import s from './Menu.module.scss';

const Menu = () => (
  <ul className={s.menu}>
    {listMenu.map(({title, path, id}) => (
      <li key={id}>
        <a href={path} className={s.menu__link}>
          {title}
        </a>
      </li>
    ))}

    <li>
      <a href="/suggest" className={classNames(s.menu__link)}>
        Suggest me
        <img
          className={s.menu__rightArrow}
          src={rightArrow}
          alt=">"
        />
      </a>
    </li>
  </ul>
)

export default Menu;
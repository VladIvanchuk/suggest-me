import {useState} from "react";
import CategoryList from "./CategoriesList.json";
import classNames from "classnames";

import s from "./Categories.module.scss";
import Container from "../Container/Container";

const Categories = () => {
  const [category, setCategory] = useState("any");
  const handleClick = (e) => {
    setCategory(e.target.name);
    console.log(category)
  }

  return (
    <Container>
      <ul className={s.category}>
        <li className={s.category__item}>
          <label
            htmlFor="any"
            className={classNames(s.category__option)}
            id="labelAny"
          >
            Any
            <input
              type="radio"
              id="any"
              name="any"
              className={s.category__mark}
              onClick={handleClick}
            />
          </label>
        </li>

        {CategoryList.map(({id, title}) => (
          <li key={id}>
            <label htmlFor={title.toLowerCase()} className={s.category__option}>
              {title}
              <input
                type="radio"
                id={title.toLowerCase()}
                name={title.toLowerCase()}
                className={s.category__mark}
                onClick={handleClick}
              />
            </label>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Categories;
import {useState} from "react";
import CategoryList from "./CategoriesList.json";

import s from "./Categories.module.scss";
import Container from "../Container/Container";

const Categories = () => {
  const [category, setCategory] = useState("radio");

  const isCategorySelected = (value) => category === value;
  const handleCategoryClick = (e) => {
    setCategory(e.currentTarget.value);
  }

  return (
    <Container>
      <ul className={s.category}>
        <li className={s.category__item}>
          <label
            htmlFor="any"
            className={category === `radio` ? s.category__active : s.category__option}
            id="labelAny"
          >
            Any
            <input
              type="radio"
              id="any"
              name="any"
              className={s.category__mark}
              value={"radio"}
              checked={isCategorySelected("radio")}
              onChange={handleCategoryClick}
            />
          </label>
        </li>

        {CategoryList.map(({id, title}) => (
          <li key={id}>
            <label htmlFor={title.toLowerCase()} className={category === `radio${id}` ? s.category__active : s.category__option}>
              {title}
              <input
                type="radio"
                id={title.toLowerCase()}
                name={title.toLowerCase()}
                className={s.category__mark}
                value={"radio" + id}
                checked={isCategorySelected(`radio${id}`)}
                onChange={handleCategoryClick}
              />
            </label>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Categories;
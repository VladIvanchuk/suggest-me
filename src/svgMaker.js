import sprite from "../src/assets/images/sprite.svg";

export const svgMaker = (svg, className) => {
  return (
    <svg className={className}>
      <use href={sprite + "#" + svg}></use>
    </svg>
  );
};

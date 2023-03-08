import sprite from "./../../assets/images/sprite.svg"

const svgMaker = (svg, className) => {
  return (
    <svg className={className}>
      <use href={sprite + "#" + svg}></use>
    </svg>
  );
};

export default svgMaker;
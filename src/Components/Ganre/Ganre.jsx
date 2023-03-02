import React from "react";

import "./ganre.scss";

const Ganre = () => {
  return (
    <div className="ganre">
      <label htmlFor="">
        <label htmlFor="any">
          <input type="radio" id="any" name="genre" value="any"  />
          Any
        </label>
        <label htmlFor="action">
          <input type="radio" id="action" name="genre" value="action" />
          Action
        </label>
        <label htmlFor="horror">
          <input type="radio" id="horror" name="genre" value="horror" />
          Horror
        </label>
        <label htmlFor="drama">
          <input type="radio" id="drama" name="genre" value="drama" />
          Drama
        </label>
        <label htmlFor="comedy">
          <input type="radio" id="comedy" name="genre" value="comedy" />
          Comedy
        </label>
      </label>
    </div>
  );
};

export default Ganre;

import { useState } from "react";
import { HeadText, RadioButton, Wrapper, Footer } from "../..";

const Body = () => {
  const [list, setList] = useState([]);

  return (
    <div>
      <HeadText />
      <RadioButton setMovie={setList} />
      <Wrapper movies={list} />
      <Footer />
    </div>
  );
};

export default Body;

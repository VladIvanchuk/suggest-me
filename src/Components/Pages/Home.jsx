import { MoviesWrapper, Filter, SuggestMe, More } from "..";
export const Home = () => {
  return (
    <>
      <SuggestMe />
      <Filter />
      <MoviesWrapper />
      <More />
    </>
  );
};

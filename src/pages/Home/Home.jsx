import Hero from "../../components1/Hero/Hero";
import Catalog from "../../components1/Catalog/Catalog";
import SuggestMe from "../../components1/SuggestMe/SuggestMe";

import s from './Home.module.scss';

const Home = () => (
  <main className={s.home}>
    <Hero />
    <Catalog />
    <SuggestMe />
  </main>
);

export default Home;

import Hero from "../../components/Hero/Hero";
import Catalog from "../../components/Catalog/Catalog";
import SuggestMe from "../../components/SuggestMe/SuggestMe";

import s from './Home.module.scss';

const Home = () => (
  <main className={s.home}>
    <Hero />
    <Catalog />
    <SuggestMe />
  </main>
);

export default Home;

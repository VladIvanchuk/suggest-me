import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Catalog from "../../components/Catalog/Catalog";

import s from './Home.module.scss';
import SuggestMe from "../../components/SuggestMe/SuggestMe";

const Home = () => (
  <main className={s.app}>
    <Header />
    <Hero />
    <Catalog />
    <SuggestMe />
  </main>
);

export default Home;

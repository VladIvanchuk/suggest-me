import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Catalog from "./components/Catalog/Catalog";

import s from './App.module.scss';
import SuggestMe from "./components/SuggestMe/SuggestMe";

const App = () => (
  <main className={s.app}>
    <Header />
    <Hero />
    <Catalog />
    <SuggestMe />
  </main>
);

export default App;

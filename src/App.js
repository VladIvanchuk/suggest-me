import s from "./App.module.scss";
import { Header, Details, Home, NotFound } from "./Components";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.body_container}>
        {/* <Home /> */}
        <Details />
        {/* <NotFound /> */}
      </div>
    </div>
  );
}

export default App;

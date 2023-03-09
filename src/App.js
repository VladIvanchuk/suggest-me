import s from "./App.module.scss";
import { Header, Body } from "./Components/Widgets";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.body_container}>
        <Body />
      </div>
    </div>
  );
}

export default App;

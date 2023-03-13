import s from "./App.module.scss";
import { Header, Router } from "./Components";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.body_container}>
        <Router />
      </div>
    </div>
  );
}

export default App;

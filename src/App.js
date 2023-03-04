import s  from "./App.module.scss";
import Header from "./Components/Widgest/Header/Header";
import Body from "./Components/Widgest/Body/Body";

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

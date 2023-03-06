import s from "./App.module.scss";
import Header from "./Components/Widgets/Header/Header";
import Body from "./Components/Widgets/Body/Body";

function App() {
  return (
    <div className={s.app}>
    <Header />
    <div className={s.body_container}>
    <Body />
    </div>
    </div>
  )
}

export default App;

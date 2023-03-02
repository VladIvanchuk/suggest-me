import "./App.scss";
import Ganre from "./Components/Ganre/Ganre";
import Header from "./Components/Header/Header";
import SuggestMe from './Components/SuggestMe/SuggestMe'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <SuggestMe></SuggestMe>
        {/* <Ganre></Ganre> */}
      </div>
    </div>
  );
}

export default App;

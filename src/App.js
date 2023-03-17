import { Header,Home,Details} from "./Components";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        {<Home /> }
        <Details />
      </div>
    </div>
  );
}

export default App;

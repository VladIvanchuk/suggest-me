import { Header,Home,Details,Error } from "./Components";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        {/* <Home /> */}
        {/* <Error /> */}
        <Details />
      </div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import CocktailsList from "./Components/CocktailsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <CocktailsList></CocktailsList>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import CocktailsList from "./Components/CocktailsList";
import Navbar from "./Components/Navbar";
import SwitchRouter from "./Components/SwitchRouter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      {/* <CocktailsList></CocktailsList> */}
      <SwitchRouter />
    </div>
  );
}

export default App;

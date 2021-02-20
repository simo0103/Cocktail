import logo from "./logo.svg";
import "./App.css";
import CocktailsList from "./Components/CocktailsList";
import Navbar from "./Components/Navbar";
import SwitchRouter from "./Components/SwitchRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        {/* <CocktailsList></CocktailsList> */}
        <SwitchRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;

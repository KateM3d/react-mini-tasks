import { Link } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h2>Welcome to mini-projects!</h2>
      <div className="list">
        <Link to={"/tree"}>Tree-stucture</Link>
        <Link to={"/memory"}>Memory Game</Link>
        <Link to={"/dropdown"}>Multi-select Dropdown</Link>
      </div>
    </div>
  );
}

export default App;

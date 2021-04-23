import "./App.css";
import Slide from "./components/Slide.js";
import { Data } from "./components/Data.js";
function App() {
  return (
    <div className="App">
      <Slide slides={Data} />
    </div>
  );
}

export default App;

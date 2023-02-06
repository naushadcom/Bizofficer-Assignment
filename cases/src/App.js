import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Subheader from "./components/Subheader";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Subheader/>
      </div>
    </div>
  );
}

export default App;

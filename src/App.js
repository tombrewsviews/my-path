import avatar1 from "./images/avatar1.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-headline">
        <p className="App-title-1">I'm Tom,</p>
        <img src={avatar1} className="App-avatar" alt="avatar" />
        <p className="App-title-2">a designer on a mission to make</p>
      </div>
    </div>
  );
}

export default App;

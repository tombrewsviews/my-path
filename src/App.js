import avatar1 from "./images/avatar1.jpg";
import world from "./images/world.svg";
import arrowLong from "./images/arrowLong.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <div className="App-headline-wrapper">
          <p className="App-headline">
            I'm Tom,
            <img src={avatar1} className="App-avatar" alt="avatar" />a designer
            on a mission to make <br /> a positive impact in the world
            <img src={world} className="App-world" alt="world" />
          </p>
        </div>
      </div>
      <div
        style={{ position: "absolute", top: "10px", right: "12%", zIndex: 0 }}
      >
        <div className="App-year-1">20</div>
        <div className="App-year-2">22</div>
      </div>
      <div
        style={{ zIndex: 3, position: "absolute", top: "150px", right: "32px" }}
      >
        <p className="App-title-eng">My Product Lead Path</p>
        <p className="App-title-jap">私の製品リードパス</p>
      </div>
      <img src={arrowLong} className="App-arrow-long" alt="scroll" />
    </div>
  );
}

export default App;

import avatar1 from "./images/avatar1.jpg";
import world from "./images/world.svg";
import value from "./images/value.svg";
import fight from "./images/fight.svg";
import arrowLong from "./images/arrowLong.svg";
import ButtonPrimary from "./components/buttonPrimary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <div className="App-headline-wrapper">
          <p className="App-headline">
            I'm Tom,
            <img src={avatar1} className="App-avatar" alt="avatar" />
            {/* <span className="App-highlight"></span> */}
            a designer on a mission to make <br /> a positive impact in the
            world
            <img src={world} className="App-world" alt="world" />I help <br />
            product teams address burning problems <br />
            and deliver value to customers
            <img src={value} className="App-world" alt="value" />
            <br />
            <br />
            This is a story of my continous fight against my weaknesess and
            shortcomings
            <img src={fight} className="App-world" alt="fight" />
          </p>
          <ButtonPrimary
            onClick={() => console.log("You clicked on the pink circle!")}
            margin="48px 0px 0px 0px"
          />
        </div>
      </div>
      <div
        style={{ position: "absolute", top: "10px", right: "12%", zIndex: 0 }}
      >
        <div className="App-year-1">20</div>
        <div className="App-year-2">22</div>
      </div>
      <div
        style={{
          zIndex: 3,
          position: "absolute",
          top: "150px",
          right: "32px",
        }}
      >
        <p className="App-title-eng">My Product Lead Path</p>
        <p className="App-title-jap">私の製品リードパス</p>
      </div>
      <img src={arrowLong} className="App-arrow-long" alt="scroll" />
    </div>
  );
}

export default App;

import React from "react";
import avatar1 from "./../images/avatar1.jpg";
import world from "./../images/world.svg";
import value from "./../images/value.svg";
import fight from "./../images/fight.svg";
import ButtonPrimary from "./../components/buttonPrimary";
import ModalFull from "./../components/modal";
import AnimationOnScroll from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
import "./../App.css";
import { ButtonIcon } from "./../components/buttonIcon";

export default function Home() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openFromParent() {
    setIsOpen(true);
  }

  function handleCloseModal(event, data) {
    console.log(event, data);
    setIsOpen(false);
  }

  function handleAfterOpen(event, data) {
    console.log(event, data);
  }
  return (
    <div style={{ display: "flex", flex: "1" }}>
      <div style={{ zIndex: "10", position: "relative" }}>
        <ModalFull
          IsModalOpened={modalIsOpen}
          onCloseModal={handleCloseModal}
          onAfterOpen={handleAfterOpen}
        />
      </div>
      <div className="App-content">
        <AnimationOnScroll animateIn="fadeIn" duration={0.5}>
          <div className="App-headline-wrapper">
            <p className="App-headline">
              I'm Tom,
              <ButtonIcon
                type="button"
                buttonStyle="btn-no-padding"
                buttonSize="btn-large"
                onClick={openFromParent}
              >
                <img src={avatar1} className="App-avatar" alt="avatar" />
              </ButtonIcon>
              a designer on a mission to make a positive impact in the world
              <ButtonIcon
                type="button"
                buttonStyle="btn-no-padding"
                buttonSize="btn-large"
                onClick={openFromParent}
              >
                <img src={world} className="App-world" alt="world" />
              </ButtonIcon>
              I help product teams address burning problems and deliver value to
              customers
              <ButtonIcon
                type="button"
                buttonStyle="btn-no-padding"
                buttonSize="btn-large"
                onClick={openFromParent}
              >
                <img src={value} className="App-world" alt="value" />
              </ButtonIcon>
              <br />
              <br />
              This is a story of my continous fight against my weaknesess and
              shortcomings
              <ButtonIcon
                type="button"
                buttonStyle="btn-no-padding"
                buttonSize="btn-large"
                onClick={openFromParent}
              >
                <img src={fight} className="App-world" alt="fight" />
              </ButtonIcon>
            </p>
            <Link to="/challenges/routines" style={{ textDecoration: "none" }}>
              <ButtonPrimary
                margin="48px 0px 0px 0px"
                text="My Everyday Challenges"
              />
            </Link>
          </div>
        </AnimationOnScroll>
      </div>

      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "15vw",
          zIndex: "0",
        }}
      >
        <div className="App-year-1">20</div>
        <div className="App-year-2">22</div>
      </div>
      <div
        style={{
          zIndex: 3,
          position: "absolute",
          top: "150px",
          right: "10px",
        }}
      >
        <p className="App-title-eng">My Product Lead Path</p>
        <p className="App-title-jap">私の製品リードパス</p>
      </div>
    </div>
  );
}

import React from "react";
import ModalFull from "./../components/modal";
import AnimationOnScroll from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import chess from "./../images/chess.jpg";
import CardSection3TextRight from "./../components/cardSection3TextRight";
import CardSection2TextRight from "./../components/cardSection2TextRight";

import leader1 from "./../images/leader1.svg";
import leader2 from "./../images/leader2.svg";
import leader3 from "./../images/leader3.svg";

import Footer from "./../components/footer.js";

export default function Processes() {
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F8E088",
        position: "relative",
        zIndex: "1",
      }}
    >
      <div style={{ zIndex: "10", position: "relative" }}>
        <ModalFull
          IsModalOpened={modalIsOpen}
          onCloseModal={handleCloseModal}
          onAfterOpen={handleAfterOpen}
        />
      </div>
      <div
        style={{
          height: "100vh",
          backgroundColor: "#271C25",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimationOnScroll animateIn="fadeIn" duration={0.5}>
          <div
            style={{
              width: "1000px",
              justifyContent: "space-between",
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                zIndex: "1",
              }}
            >
              <p style={{ color: "#D9B531", fontWeight: "600" }}>二つ</p>
              <p
                style={{
                  color: "#D9B531",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                Challenge Two
              </p>
              <h1
                style={{
                  fontSize: "90px",
                  color: "#fff",
                  marginTop: "20px",
                  marginLeft: "-5px",
                }}
              >
                Processes
              </h1>
              <p
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "400",
                  marginTop: "0px",
                  lineHeight: "1.7",
                }}
              >
                The creative and rebellious voice in me always wants to reinvent
                the status quo, but well-defined processes became a steady
                foundation for my team and me.
              </p>
            </div>
            <AnimationOnScroll
              animateIn="animate__swing"
              animatePreScroll={false}
              initiallyVisible={true}
            >
              <img
                src={chess}
                style={{
                  width: "550px",
                  height: "auto",
                  marginTop: "50px",
                }}
                alt="world"
              />
            </AnimationOnScroll>
          </div>
        </AnimationOnScroll>
      </div>
      <div
        style={{
          alignSelf: "center",
          width: "1000px",
          paddingTop: "100px",
          backgroundColor: "#F8E088",
        }}
      >
        <h1 style={{ color: "#1C2327", marginBottom: "32px" }}>Leadership</h1>
        <CardSection2TextRight imgOne={leader1}>
          <p style={{ fontSize: "16px" }}>
            The best athletes aren't focused on being the best but on constant
            self-improvement. When you stop stressing about the outcome and
            focus on the process, a considerable burden is lifted off your
            shoulders. Research shows that concentrating on the process is best
            for performance and motivation.
            <br />
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={leader2}>
          <p style={{ fontSize: "16px" }}>
            I like this visual as much as I want to know the why behind my work.
            Purpose and impact drive my motivation towards improvement and
            delight. I believe impeccably designed software has the power to
            change people's lives.
            <br />
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={leader3}>
          <p style={{ fontSize: "16px" }}>
            With the proper focus, mission, goals, and actions leading a product
            team towards success is a matter of communication.
            <br />
            <br />I tend to set ambitious goals and follow up with ambitious
            actions. My long-term goal is to dominate, not compete.
          </p>
        </CardSection2TextRight>
      </div>
      <Footer
        backgroundColor="rgb(242 236 236)"
        onClick={openFromParent}
      ></Footer>
    </div>
  );
}

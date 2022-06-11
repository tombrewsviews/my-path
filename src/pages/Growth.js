import React from "react";
import ModalFull from "./../components/modal";
import AnimationOnScroll from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import shield from "./../images/shield.png";
import CardSection3TextRight from "./../components/cardSection3TextRight";
import CardSection2TextRight from "./../components/cardSection2TextRight";
import skills from "./../images/skills.svg";
import leadership from "./../images/leadership.svg";

import awards from "./../images/awards-01.svg";
import achieve from "./../images/achieve.svg";
import achieve2 from "./../images/achieve2.svg";
import achieve3 from "./../images/achieve3.svg";
import achieve4 from "./../images/achieve4.svg";
import achieve5 from "./../images/achieve5.svg";
import achieve6 from "./../images/achieve6.svg";
import achieve7 from "./../images/achieve7.svg";
import achieve8 from "./../images/achieve8.svg";
import achieve9 from "./../images/achieve9.svg";
import achieve10 from "./../images/achieve10.svg";

export default function Growth() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openFromParent() {
    setIsOpen(true);
  }
  function handleCloseModal(event, data) {
    // console.log(event, data);
    setIsOpen(false);
  }

  function handleAfterOpen(event, data) {
    // console.log(event, data);
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
          backgroundColor: "#1C2327",
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
              <p style={{ color: "#D9B531", fontWeight: "600" }}>ワン</p>
              <p
                style={{
                  color: "#D9B531",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                Challenge One
              </p>
              <h1
                style={{
                  fontSize: "90px",
                  color: "#fff",
                  marginTop: "20px",
                  marginLeft: "-5px",
                }}
              >
                Growth
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
                I step out of my comfort zone as often as possible. Continous
                change and growth are the most important drivers behind my
                achievements and professional transformation.
              </p>
            </div>
            <AnimationOnScroll
              animateIn="animate__heartBeat"
              animatePreScroll={false}
              initiallyVisible={true}
            >
              <img
                src={shield}
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
        <h1 style={{ color: "#1C2327" }}>Growth Paths</h1>
        <CardSection2TextRight imgOne={skills}>
          <p style={{ fontSize: "18px" }}>
            My <br />
            <br />
            More <br />
            <br />
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={leadership}>
          <p style={{ fontSize: "18px" }}>
            My <br />
            <br />
            More
            <br />
            <br />
          </p>
        </CardSection2TextRight>

        <h1 style={{ marginTop: "100px" }}>Achievements</h1>
        <CardSection2TextRight imgOne={awards}>
          <p style={{ fontSize: "18px" }}>
            Awards
            <br />
            <br />
          </p>
        </CardSection2TextRight>

        <CardSection3TextRight imgOne={achieve} imgTwo={achieve2}>
          <p style={{ fontSize: "18px" }}>
            Patterns
            <br />
            <br />
          </p>
        </CardSection3TextRight>

        <CardSection3TextRight imgOne={achieve3} imgTwo={achieve4}>
          <p style={{ fontSize: "18px" }}>
            Patterns2
            <br />
            <br />
          </p>
        </CardSection3TextRight>

        <CardSection3TextRight imgOne={achieve5} imgTwo={achieve6}>
          <p style={{ fontSize: "18px" }}>
            KPIs
            <br />
            <br />
          </p>
        </CardSection3TextRight>

        <CardSection3TextRight imgOne={achieve7} imgTwo={achieve8}>
          <p style={{ fontSize: "18px" }}>
            Mentoring
            <br />
            <br />
          </p>
        </CardSection3TextRight>

        <CardSection3TextRight imgOne={achieve9} imgTwo={achieve10}>
          <p style={{ fontSize: "18px" }}>
            Transformation
            <br />
            <br />
          </p>
        </CardSection3TextRight>
      </div>
    </div>
  );
}

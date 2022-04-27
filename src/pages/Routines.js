import React from "react";
import ModalFull from "./../components/modal";
import AnimationOnScroll from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import clock from "./../images/clock.jpg";
import CardSection3TextRight from "./../components/cardSection3TextRight";
import CardSection2TextRight from "./../components/cardSection2TextRight";
import daily1 from "./../images/daily1-01.svg";
import daily2 from "./../images/daily2-01.svg";
import weekly from "./../images/weekly-01.svg";

export default function Routines() {
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
          backgroundColor: "#1C1E27",
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
                Routines
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
                I challenge myself to grow, learn, and get things done every day
                with the help of a few well-balanced routines. I use routines to
                stay in touch with my team and define the long-term purpose of
                my work.
              </p>
            </div>
            <AnimationOnScroll
              animateIn="animate__tada"
              animatePreScroll={false}
              initiallyVisible={true}
            >
              <img
                src={clock}
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
        <h1>Daily Routines</h1>
        <CardSection3TextRight imgOne={daily1} imgTwo={daily2}>
          <p style={{ fontSize: "18px" }}>
            Daily routines are the hardest to stick with successfully, but the
            progress starts every morning repeatedly. <br />
            <br />I wasn't always into finding balance through routines. <br />
            <br />
            My creative and curious nature was an obstacle in the past. <br />
            <br />
            I've noticed a positive productivity change since I've developed my
            routines templates (on the left, working day; on the right, break
            day) and started applying them depending on the day.
          </p>
        </CardSection3TextRight>
        <h1 style={{ marginTop: "100px" }}>Weekly Routines</h1>
        <CardSection2TextRight imgOne={weekly}>
          <p style={{ fontSize: "18px" }}>
            Daily routines are the hardest to stick with successfully, but the
            progress starts here, every morning and every focus time. <br />
            <br />I wasn't always into finding balance through routines. <br />
            <br />
          </p>
        </CardSection2TextRight>
        <h1 style={{ marginTop: "100px" }}>Monthly Routines</h1>
        <CardSection2TextRight imgOne={weekly}>
          <p style={{ fontSize: "18px" }}>
            Daily routines are the hardest to stick with successfully, but the
            progress starts here, every morning and every focus time. <br />
            <br />I wasn't always into finding balance through routines. <br />
            <br />
          </p>
        </CardSection2TextRight>
        <h1 style={{ marginTop: "100px" }}>Annual Routines</h1>
        <CardSection2TextRight imgOne={weekly}>
          <p style={{ fontSize: "18px" }}>
            Daily routines are the hardest to stick with successfully, but the
            progress starts here, every morning and every focus time. <br />
            <br />I wasn't always into finding balance through routines. <br />
            <br />
          </p>
        </CardSection2TextRight>
      </div>
    </div>
  );
}

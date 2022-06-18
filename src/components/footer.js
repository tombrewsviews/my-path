import React from "react";
import AnimationOnScroll from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import usecases from "./../images/usecases.jpg";
import draw from "./../images/footerdraw.jpg";
import { ButtonIcon } from "./../components/buttonIcon";

export default function Footer(props) {
  return (
    <div
      style={{
        display: "flex",
        // flex: "1",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        marginTop: "200px",
        paddingBottom: "200px",
        backgroundColor: props.backgroundColor,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AnimationOnScroll animateIn="fadeIn" duration={0.5}>
        <div style={{ position: "relative", top: "0px" }}>
          <img
            src={draw}
            style={{
              position: "relative",
              top: "200px",
              zIndex: "1",
            }}
          />
          <div
            style={{
              position: "relative",
              top: "-350px",
              left: "300px",
              zIndex: "2",
            }}
          >
            <ButtonIcon
              type="button"
              buttonStyle="btn-no-padding"
              buttonSize="btn-large"
              onClick={props.onClick}
            >
              <img
                style={{
                  width: "600px",
                  filter: "drop-shadow(0px 16px 24px rgba(0,0,0,0.1))",
                  borderRadius: "8px",
                }}
                src={usecases}
              />
            </ButtonIcon>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

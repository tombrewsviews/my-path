import React from "react";
import AnimationOnScroll from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import usecases from "./../images/usecases.jpg";
import draw from "./../images/footerHighlight.svg";
import { ButtonIcon } from "./../components/buttonIcon";
import dribbble from "./../images/dribbble.svg";
import code from "./../images/code.svg";
import medium from "./../images/medium.svg";

export default function Footer(props) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
              width: "500px",
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
                  filter: "drop-shadow(0px 16px 24px rgba(216,210,210,0.5))",
                  borderRadius: "8px",
                }}
                src={usecases}
              />
            </ButtonIcon>
          </div>
        </div>
      </AnimationOnScroll>
      <div
        style={{
          backgroundColor: "rgb(242 236 236)",
          width: "100%",
          display: "flex",
          flex: "1",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          bottom: "50px",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <ButtonIcon
            onClick={() => openInNewTab("https://dribbble.com/tmass")}
          >
            <div>
              <img
                style={{
                  width: "16px",
                  position: "relative",
                  top: "10px",
                  left: "7px",
                }}
                src={dribbble}
              />
              <p
                style={{
                  color: "#6e7699",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "14px",
                  marginLeft: "20px",
                  marginRight: "20px",
                  width: "1px",
                  lineHeight: "15px",
                }}
              >
                ????????????
              </p>
            </div>
          </ButtonIcon>
          <ButtonIcon
            onClick={() => openInNewTab("http://github.com/tombrewsviews")}
          >
            <div>
              <img
                style={{
                  width: "16px",
                  position: "relative",
                  top: "10px",
                  left: "7px",
                }}
                src={code}
                alt=""
              />
              <p
                style={{
                  color: "#6e7699",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "14px",
                  marginLeft: "20px",
                  marginRight: "20px",
                  width: "1px",
                  lineHeight: "15px",
                }}
              >
                ???????????????
              </p>
            </div>
          </ButtonIcon>
          <ButtonIcon
            onClick={() => openInNewTab("https://medium.com/@tomparandyk")}
          >
            <div>
              <img
                style={{
                  width: "16px",
                  position: "relative",
                  top: "10px",
                  left: "7px",
                }}
                src={medium}
                alt=""
              />
              <p
                style={{
                  color: "#6e7699",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "14px",
                  marginLeft: "20px",
                  marginRight: "20px",
                  width: "1px",
                  lineHeight: "15px",
                }}
              >
                ????????????
              </p>
            </div>
          </ButtonIcon>
        </div>
        <p
          style={{
            color: "#6e7699",
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "14px",
            marginTop: "32px",
          }}
        >
          Made from scratch and with React and excruciating love for every
          pixel. June 2022.
        </p>
      </div>
    </div>
  );
}

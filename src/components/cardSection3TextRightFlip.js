import React from "react";
import AnimationOnScroll from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./cardSection3TextRightFlip.css";

export default function cardSection3TextRightFlip({
  children,
  imgOne,
  imgTwo,
  textOne,
  textTwo,
}) {
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "row",
        marginTop: "16px",
      }}
    >
      <AnimationOnScroll animateIn="fadeInLeft" duration={0.7}>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={imgOne} alt="" className="flip-card-img" />
            </div>
            <div className="flip-card-back">{textOne}</div>
          </div>
        </div>
      </AnimationOnScroll>
      <div style={{ width: "16px", height: "16px" }}></div>
      <AnimationOnScroll animateIn="fadeInLeft" duration={0.5}>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={imgTwo} alt="" className="flip-card-img" />
            </div>
            <div className="flip-card-back">{textTwo}</div>
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="fadeInRight" duration={1}>
        <div
          style={{
            display: "flex",
            flex: "1",
            width: "250px",
            marginLeft: "48px",
            marginTop: "16px",
          }}
        >
          {children}
        </div>
      </AnimationOnScroll>
    </div>
  );
}

import React from "react";
import AnimationOnScroll from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./cardSection3TextRightFlip.css";

export default function cardSection3TextRightFlip({
  children,
  imgOne,
  imgTwo,
}) {
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "row",
        marginTop: "32px",
      }}
    >
      <AnimationOnScroll animateIn="fadeInLeft" duration={0.7}>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={imgOne} alt="" className="flip-card-img" />
            </div>
            <div className="flip-card-back">back</div>
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
            <div className="flip-card-back">back</div>
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="fadeInRight" duration={1}>
        <div style={{ display: "flex", flex: "1", marginLeft: "48px" }}>
          {children}
        </div>
      </AnimationOnScroll>
    </div>
  );
}

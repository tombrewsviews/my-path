import React from "react";
import AnimationOnScroll from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function cardSection3TextRight({ children, imgOne, imgTwo }) {
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
        <div
          style={{
            display: "flex",
            flex: "1",
            width: "342px",
            flexDirection: "column",
            backgroundColor: "#fff",
            borderRadius: "24px",
            boxShadow: "0px 8px 32px #F4CF47",
            padding: "16px",
          }}
        >
          <img src={imgOne} alt="" />
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="fadeInLeft" duration={0.5}>
        <div
          style={{
            display: "flex",
            flex: "1",
            width: "342px",
            flexDirection: "column",
            backgroundColor: "#fff",
            borderRadius: "24px",
            marginLeft: "16px",
            boxShadow: "0px 8px 32px #F4CF47",
            padding: "16px",
          }}
        >
          <img src={imgTwo} alt="" />
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

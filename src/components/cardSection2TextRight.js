import React from "react";
import AnimationOnScroll from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function cardSection2TextRight({ children, imgOne }) {
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "row",
        marginTop: "16px",
      }}
    >
      <AnimationOnScroll animateIn="fadeInLeft" duration={0.5}>
        <div
          style={{
            display: "flex",
            flex: "3",
            width: "700px",
            height: "auto",
            flexDirection: "column",
            backgroundColor: "#fff",
            borderRadius: "24px",
            boxShadow: "0px 8px 32px #F4CF47",
            overflow: "hidden",
            padding: "16px",
          }}
        >
          <img src={imgOne} alt="" />
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="fadeIn"
        animateIn="fadeInRight"
        duration={1}
      >
        <div
          style={{
            // display: "flex",
            // flex: "1",
            marginLeft: "48px",
            // width: "250px",
          }}
        >
          {children}
        </div>
      </AnimationOnScroll>
    </div>
  );
}

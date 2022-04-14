import React from "react";
import ModalFull from "./../components/modal";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import clock from "./../images/clock.jpg";

export default function Routines() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          height: "800px",
          backgroundColor: "#1C1E27",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "1000px",
            justifyContent: "space-between",
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ color: "#D9B531", fontWeight: "600" }}>ワン</p>
            <p
              style={{ color: "#D9B531", fontWeight: "600", fontSize: "18px" }}
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
              Took me some time to figure out the importance of routines in my
              life. It's me versus preceverence ever day and every hour.
            </p>
          </div>
          <img
            src={clock}
            style={{
              width: "550px",
              height: "auto",
              marginTop: "50px",
            }}
            alt="world"
          />
        </div>
      </div>
      <p style={{ alignSelf: "center", width: "1000px" }}>
        aweoijf j waejif oawjf ;oawjf ;oawj o;ajw fojaw fojaw;of j;oawjfo;ajf
        aweoijf j waejif oawjf ;oawjf ;oawj o;ajw fojaw fojaw;of j;oawjfo;ajf
        aweoijf j waejif oawjf ;oawjf ;oawj o;ajw fojaw fojaw;of j;oawjfo;ajf
        aweoijf j waejif oawjf ;oawjf ;oawj o;ajw fojaw fojaw;of j;oawjfo;ajf
        aweoijf j waejif oawjf ;oawjf ;oawj o;ajw fojaw fojaw;of j;oawjfo;ajf
        aweoijf j waejif oawjf ;oawjf ;oawj o;ajw fojaw fojaw;of
        j;oawjfo;ajfaweoijf j waejif oawjf ;oawjf ;oawj o;ajw fojaw fojaw;of
        j;oawjfo;ajf aweoijf j waejif oawjf ;oawjf ;oawj o;ajw fojaw fojaw;of
        j;oawjfo;ajf aweoijf j waejif oawjf ;oawjf ;oawj o;ajw fojaw fojaw;of
        j;oawjfo;ajf aweoijf j waejif oawjf ;oawjf ;oawj o;ajw fojaw fojaw;of
        j;oawjfo;ajf aweoijf j waejif oawjf ;oawjf ;oawj o;ajw fojaw fojaw;of
        j;oawjfo;ajf aweoijf j waejif oawjf ;oawjf ;oawj o;ajw fojaw fojaw;of
        j;oawjfo;ajf
      </p>
    </div>
  );
}

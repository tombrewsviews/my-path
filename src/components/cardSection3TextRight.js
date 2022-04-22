import React from "react";

export default function cardSection3TextRight(type) {
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "row",
        marginTop: "48px",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: "24px",
          boxShadow: "0px 8px 52px #EACC61",
        }}
      >
        one
      </div>
      <div
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: "24px",
          marginLeft: "32px",
          boxShadow: "0px 8px 52px #EACC61",
        }}
      >
        two
      </div>
      <p
        style={{
          display: "flex",
          flex: "1",
          marginLeft: "32px",
        }}
      >
        Section text goes here with some stuff about routines and why they are
        important. That goes for few lines and couple of sentences, maybe up to
        four in total.
      </p>
    </div>
  );
}

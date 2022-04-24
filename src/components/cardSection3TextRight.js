import React from "react";

export default function cardSection3TextRight(props) {
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
          boxShadow: "0px 8px 32px #F4CF47",
          overflow: "hidden",
        }}
      >
        <img src={props.imgOne} />
      </div>
      <div
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: "24px",
          marginLeft: "32px",
          boxShadow: "0px 8px 32px #F4CF47",
        }}
      >
        <img src={props.imgTwo} />
      </div>
      <p
        style={{
          display: "flex",
          flex: "1",
          marginLeft: "32px",
          fontSize: "18px",
        }}
      >
        {props.text}
      </p>
    </div>
  );
}

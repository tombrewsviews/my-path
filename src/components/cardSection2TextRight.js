import React from "react";

export default function cardSection2TextRight({ children, imgOne }) {
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
          flex: "2.2",
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
      <div style={{ display: "flex", flex: "1", marginLeft: "64px" }}>
        {children}
      </div>
    </div>
  );
}

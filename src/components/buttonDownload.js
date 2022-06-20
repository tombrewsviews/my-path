import React from "react";
import { Link } from "react-router-dom";

function ButtonDownload(props) {
  return (
    <a
      href="/public/Case_Studies_2022_Tom_Parandyk.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p
        style={{
          color: "#323232",
          fontFamily: "Poppins",
          fontWeight: "500",
          fontSize: "14px",
          borderRadius: "32px",
          padding: "12px 24px 12px 24px",
          border: "1px solid #323232",
          textDecoration: "none",
        }}
      >
        {props.text}
      </p>
    </a>
  );
}

export default ButtonDownload;

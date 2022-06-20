import React from "react";
import { Link } from "react-router-dom";

function ButtonDownload(props) {
  return (
    // <Link
    //   style={{ textDecoration: "none" }}
    //   to={props.src}
    //   target="_blank"
    //   download
    // >
    <a style={{ textDecoration: "none" }} href={props.src} target="_blank">
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
    // </Link>
  );
}

export default ButtonDownload;

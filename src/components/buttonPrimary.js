import React from "react";

interface Props {
  onClick: () => void;
  margin: string;
}

const ButtonPrimary: React.FC<Props> = ({ icon, onClick, margin, text }) => {
  return (
    <a
      onClick={onClick}
      style={{
        border: "none",
        backgroundColor: "#5E6896",
        borderRadius: "32px",
        padding: "12px 24px 12px 24px",
        children: "My Three Impossible Challenges",
        margin,
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p
        style={{
          color: "#fff",
          fontFamily: "Poppins",
          fontWeight: "500",
          fontSize: "14px",
        }}
      >
        {text}
      </p>
      <img
        src={icon}
        style={{ width: "16px", height: "16px", marginLeft: "8px" }}
        alt="arrow"
      />
    </a>
  );
};

export default ButtonPrimary;

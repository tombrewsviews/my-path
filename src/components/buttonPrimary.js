import React from "react";

interface Props {
  onClick: () => void;
  margin: string;
}

const ButtonPrimary: React.FC<Props> = ({ onClick, margin }) => {
  return (
    <button
      onClick={onClick}
      style={{
        border: "1px solid #1c1c1c",
        backgroundColor: "#f2f2f2",
        borderRadius: "32px",
        padding: "12px 16px 12px 16px",
        children: "My Three Impossible Challenges",
        margin,
      }}
    >
      <p
        style={{
          color: "#1c1c1c",
          fontFamily: "Poppins",
          fontWeight: "500",
          fontSize: "14px",
        }}
      >
        My Three Impossible Challenges
      </p>
    </button>
  );
};

export default ButtonPrimary;

import React from "react";
import ButtonPrimary from "./buttonPrimary";
import arrowUpRight from "./../images/arrowUpRight.svg";

function ModalCase(props) {
  const styles = {
    sectionWrapper: {
      paddingLeft: "32px",
      paddingRight: "32px",
      paddingTop: "32px",
      paddingBottom: "32px",
      flexDirection: "row",
      display: "flex",
      maxWidth: "1400px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    textWrapper: {
      flexDirection: "column",
      display: "flex",
      flexGrow: "1",
      alignItems: "flex-start",
    },
    imgWrapper: {
      flexDirection: "column",
      display: "flex",
      maxWidth: "50%",
      marginLeft: "64px",
    },
    sectionName: {
      fontSize: "40px",
      fontWeight: "500",
      color: "#323232",
      lineHeight: "50px",
    },
    paragraphTitle: {
      fontSize: "16px",
      textTransform: "uppercase",
      marginTop: "48px",
    },
    paragraphBody: {
      fontSize: "20px",
      marginTop: "16px",
      whiteSpace: "pre-line",
    },
  };

  return (
    <div style={styles.sectionWrapper}>
      <div style={styles.textWrapper}>
        <div style={styles.sectionName}>{props.sectionName}</div>
        <div style={styles.paragraphTitle}>About the project</div>
        <div style={styles.paragraphBody}>{props.about}</div>
        <div style={styles.paragraphTitle}>The Problem</div>
        <div style={styles.paragraphBody}>{props.problem}</div>
        <div style={styles.paragraphTitle}>Research</div>
        <div style={styles.paragraphBody}>{props.research}</div>
        <div style={styles.paragraphTitle}>Prototyping and Testing</div>
        <div style={styles.paragraphBody}>{props.prototyping}</div>
        <div style={styles.paragraphTitle}>Key Design Decisions</div>
        <div style={styles.paragraphBody}>{props.decisions}</div>
        <div style={styles.paragraphTitle}>Main Takeaways</div>
        <div style={styles.paragraphBody}>{props.takeaways}</div>
        <ButtonPrimary
          text="Open Final Design"
          icon={arrowUpRight}
          backgroundColor="#323232"
          margin="64px 0px 0px 0px"
          onClick={props.onClick}
        />
      </div>
      <div style={styles.imgWrapper}>{props.children}</div>
    </div>
  );
}
export default ModalCase;

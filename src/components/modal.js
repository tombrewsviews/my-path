import React, { useRef, useState } from "react";
import Modal from "react-modal";
import avatar1 from "./../images/avatar1.jpg";
import world from "./../images/world.svg";
import value from "./../images/value.svg";
import fight from "./../images/fight.svg";
import logout from "./../images/logout.svg";
import ModalCase from "./modalCase";
import SA1 from "./../images/SANew1.jpg";
import SA2 from "./../images/SANew2.jpg";
import SA3 from "./../images/SANew3.jpg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "80%",
    height: "80%",
    padding: "0px",
    display: "flex",
    flex: "1",
    // marginRight: "-50%",
    borderRadius: "20px",
    transform: "translate(-50%, -50%)",
    boxShadow: "0px 16px 32px rgba(109,23,153,0.1)",
    backgroundColor: "rgba(255,255,255,1)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  overlay: {
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(109,23,153,0.4)",
    background: "rgb(142,0,212)",
    background:
      "linear-gradient(90deg, rgba(109,23,153,0.4) 0%, rgba(101,0,98,0.4) 50%, rgba(255,0,206,0.2) 100%)",
    background:
      "-webkit-linear-gradient(90deg, rgba(109,23,153,0.4) 0%, rgba(101,0,98,0.4) 50%, rgba(255,0,206,0.2) 100%)",
    zIndex: "5000",
  },
  buttonMenu: {
    cursor: "pointer",
    background: "transparent",
    color: "#0000ff",
    borderRightWidth: "3px",
    borderRightStyle: "solid",
    borderRightColor: "white",
    borderLeft: "3px solid white",
    margin: "0",
    width: "100px",
    height: "38px",
  },
  buttonMenuActive: {
    cursor: "pointer",
    background: "transparent",
    color: "#0000ff",
    borderRightWidth: "3px",
    borderRightStyle: "solid",
    borderRightColor: "#AD5AC1",
    borderLeft: "3px solid white",
    margin: "0",
    width: "100px",
    height: "38px",
  },
  caseImg: {
    marginTop: "8px",
    borderRadius: "12px",
  },
};

function ModalFull(props) {
  function afterOpenModal(e) {
    props.onAfterOpen(e, "After Modal Opened");
  }

  function onModalClose(event) {
    let data = { name: "example", type: "closed from child" };
    props.onCloseModal(event, data);
  }

  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const [isActiveOne, setActiveOne] = useState(true);
  const [isActiveTwo, setActiveTwo] = useState(false);
  const [isActiveThree, setActiveThree] = useState(false);

  const goToOne = () => {
    setActiveOne(true);
    oneRef.current.scrollIntoView({ behavor: "smooth" });
    setActiveTwo(false);
    setActiveThree(false);
  };
  const goToTwo = () => {
    setActiveTwo(true);
    twoRef.current.scrollIntoView({ behavor: "smooth" });
    setActiveOne(false);
    setActiveThree(false);
  };

  const goToThree = () => {
    setActiveThree(true);
    threeRef.current.scrollIntoView({ behavor: "smooth" });
    setActiveOne(false);
    setActiveTwo(false);
  };

  return (
    <div>
      <Modal
        isOpen={props.IsModalOpened}
        onAfterOpen={(e) => afterOpenModal(e)}
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={() => {
          onModalClose();
        }}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={200}
      >
        <div
          style={{
            display: "flex",
            flex: "1",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100px",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "32px",
              paddingBottom: "32px",
              justifyContent: "space-between",
              borderRight: "1px solid #f2f2f2",
            }}
          >
            <img
              src={avatar1}
              style={{ height: "40px", width: "40px", borderRadius: "24px" }}
              alt="avatar"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "160px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button
                style={
                  isActiveOne
                    ? customStyles.buttonMenuActive
                    : customStyles.buttonMenu
                }
                onClick={goToOne}
              >
                <img
                  src={world}
                  style={{ height: "38px", width: "38px" }}
                  alt="avatar"
                />
              </button>
              <button
                style={
                  isActiveTwo
                    ? customStyles.buttonMenuActive
                    : customStyles.buttonMenu
                }
                onClick={goToTwo}
              >
                <img
                  src={value}
                  style={{ height: "38px", width: "38px" }}
                  alt="avatar"
                />
              </button>
              <button
                style={
                  isActiveThree
                    ? customStyles.buttonMenuActive
                    : customStyles.buttonMenu
                }
                onClick={goToThree}
              >
                <img
                  src={fight}
                  style={{ height: "38px", width: "38px" }}
                  alt="avatar"
                />
              </button>
            </div>
            <a onClick={(e) => onModalClose(e)}>
              <img
                src={logout}
                style={{ height: "32px", width: "32px" }}
                alt="avatar"
              />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flex: "1",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "100px",
                width: "100%",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "32px",
                paddingRight: "32px",
                borderBottom: "1px solid #f2f2f2",
                fontSize: "20px",
              }}
            >
              Product Design Case Studies
            </div>
            <div
              style={{
                display: "flex",
                flex: "1",
                width: "100%",
                flexDirection: "column",
                // paddingTop: "32px",
                // paddingBottom: "32px",
                overflowY: "auto",
                scrollBehavior: "smooth",
              }}
            >
              <section ref={oneRef}>
                <ModalCase
                  sectionName="Smart Albums"
                  about="Pixellu delivers solutions for busy professional photographers. Smart Albums is one of their most successful tool for wedding album creation. "
                  problem="Designed in 2014, Smart Albums utilizes early Google Material guidelines. Last year I was tasked to redesign the interface, interactions layer, and user experience to modernize the solution."
                  research="We've interviewed hundreds of photographers to define the overall problem space. We found out the existing customers never mentioned outdated interface design as a burning problem. Inconsistencies between the software design and marketing campaigns were only noticeable by new customers on the branding level."
                  prototyping="We've tested several color versions, including greyscale and color icons and four shades of gray for background colors. We found benefits to reducing the number of icons/buttons using a progressive disclosure pattern. "
                  takeaways="Keep redesigning even if a solution works well. The software can be continuously improved. Be mindful of existing patterns and behaviors adopted by the users."
                >
                  <img style={customStyles.caseImg} src={SA1} />
                  <img style={customStyles.caseImg} src={SA2} />
                  <img style={customStyles.caseImg} src={SA3} />
                </ModalCase>
              </section>
              <section ref={twoRef}></section>
              <section ref={threeRef}></section>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalFull;

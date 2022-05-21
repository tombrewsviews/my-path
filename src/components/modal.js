import React, { useRef, useState } from "react";
import Modal from "react-modal";
import avatar1 from "./../images/avatar1.jpg";
import world from "./../images/world.svg";
import value from "./../images/value.svg";
import fight from "./../images/fight.svg";
import logout from "./../images/logout.svg";

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
              }}
            >
              Header
            </div>
            <div
              style={{
                display: "flex",
                flex: "1",
                width: "100%",
                flexDirection: "column",
                paddingLeft: "32px",
                paddingRight: "32px",
                paddingTop: "32px",
                paddingBottom: "32px",
                overflowY: "auto",
                scrollBehavior: "smooth",
              }}
            >
              <section ref={oneRef}>
                <p>
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjef oiawjefiojaweoi
                  joawejf oiajwef ioawjef oawjef oiawjefiojaweoi joawejf oiajwef
                  ioawjef oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjefoiawjefiojaweoi
                  joawejf oiajwef ioawjef oawjefoiawjefiojaweoi joawejf oiajwef
                  ioawjef oawjef oiawjefiojaweoi joawejf oiajwef ioawjef
                  oawjefoiawjefiojaweoi joawejf oiajwef ioawjef
                  oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjefoiawjefiojaweoi
                  joawejf oiajwef ioawjef oawjefoiawjefiojaweoi joawejf oiajwef
                  ioawjef oawjef oiawjefiojaweoi joawejf oiajwef ioawjef
                  oawjefoiawjefiojaweoi joawejf oiajwef ioawjef
                  oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjefoiawjefiojaweoi
                  joawejf oiajwef ioawjef oawjefoiawjefiojaweoi joawejf oiajwef
                  ioawjef oawjef oiawjefiojaweoi joawejf oiajwef ioawjef
                  oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjefoiawjefiojaweoi
                  joawejf oiajwef ioawjef oawjefoiawjefiojaweoi joawejf oiajwef
                  ioawjef oawjef oiawjefiojaweoi joawejf oiajwef ioawjef
                  oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjefoiawjefiojaweoi
                  joawejf oiajwef ioawjef oawjef oiawjefiojaweoi joawejf oiajwef
                  ioawjef oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                </p>
              </section>
              <section ref={twoRef}>
                <p>
                  YYYYYYYYYoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjefoiawjefiojaweoi
                  joawejf oiajwef ioawjef oawjefoiawjefiojaweoi joawejf oiajwef
                  ioawjef oawjef oiawjefiojaweoi joawejf oiajwef ioawjef
                  oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjefoiawjefiojaweoi
                  joawejf oiajwef ioawjef oawjef oiawjefiojaweoi joawejf oiajwef
                  ioawjef oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjefoiawjefiojaweoi
                  joawejf oiajwef ioawjef oawjefoiawjefiojaweoi joawejf oiajwef
                  ioawjef oawjef oiawjefiojaweoi joawejf oiajwef ioawjef
                  oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjefoiawjefiojaweoi
                  joawejf oiajwef ioawjef oawjef oiawjefiojaweoi joawejf oiajwef
                  ioawjef oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjefoiawjefiojaweoi
                  joawejf oiajwef ioawjef oawjefoiawjefiojaweoi joawejf oiajwef
                  ioawjef oawjef oiawjefiojaweoi joawejf oiajwef ioawjef
                  oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjefoiawjefiojaweoi
                  joawejf oiajwef ioawjef oawjef oiawjefiojaweoi joawejf oiajwef
                  ioawjef oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                </p>
              </section>
              <section ref={threeRef}>
                <p>
                  aaaaaaaaaaaaaaaaaaaYYYYYYYYYoiawjefiojaweoi joawejf oiajwef
                  ioawjef oawjef oawjefoiawjefiojaweoi joawejf oiajwef ioawjef
                  oawjef oiawjefiojaweoi joawejf oiajwef ioawjef
                  oawjefoiawjefiojaweoi joawejf oiajwef ioawjef
                  oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjefoiawjefiojaweoi
                  joawejf oiajwef ioawjef oawjef oiawjefiojaweoi joawejf oiajwef
                  ioawjef oawjefoiawjefiojaweoi joawejf oiajwef ioawjef oawjef
                  oiawjefiojaweoi joawejf oiajwef ioawjef oawjefoiawjefiojaweoi
                  joawejf oiajwef ioawjef oawjef oiawjefiojaweoi joawejf oiajwef
                  ioawjef oawjef
                </p>
              </section>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalFull;

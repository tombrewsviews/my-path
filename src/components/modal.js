import React from "react";
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
};

function ModalFull(props) {
  function afterOpenModal(e) {
    props.onAfterOpen(e, "After Modal Opened");
  }

  function onModalClose(event) {
    let data = { name: "example", type: "closed from child" };
    props.onCloseModal(event, data);
  }

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
              <img
                src={world}
                style={{ height: "42px", width: "42px" }}
                alt="avatar"
              />
              <img
                src={value}
                style={{ height: "38px", width: "38px" }}
                alt="avatar"
              />
              <img
                src={fight}
                style={{ height: "38px", width: "38px" }}
                alt="avatar"
              />
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
                flexDirection: "row",
                paddingLeft: "32px",
                paddingRight: "32px",
                paddingTop: "32px",
                paddingBottom: "32px",
              }}
            >
              Content
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalFull;

import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "80%",
    height: "80%",
    // marginRight: "-50%",
    borderRadius: "20px",
    transform: "translate(-50%, -50%)",
    boxShadow: "0px 16px 32px rgba(109,23,153,0.1)",
    backgroundColor: "rgba(255,255,255,1)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  overlay: {
    backdropFilter: "blur(10px)",
    // backgroundColor: "rgba(109,23,153,0.4)",
    background: "rgb(142,0,212)",
    background:
      "linear-gradient(0deg, rgba(109,23,153,0.4) 0%, rgba(101,0,98,0.4) 50%, rgba(255,0,206,0.2) 100%)",
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
        <div></div>
        <button onClick={(e) => onModalClose(e)}>close</button>
      </Modal>
    </div>
  );
}

export default ModalFull;

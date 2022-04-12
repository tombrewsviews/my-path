import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "80%",
    height: "70%",
    // marginRight: "-50%",
    borderRadius: "20px",
    transform: "translate(-50%, -50%)",
    boxShadow: "0px 16px 32px rgba(62,103,251,0.3)",
  },
  overlay: {
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(115,168,255,0.5)",
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
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={200}
      >
        <h2>{props.dynData.title}</h2>
        <button onClick={(e) => onModalClose(e)}>close</button>
        <div>
          <ul>
            {props.dynData.body.map((fr) => (
              <li>{fr}</li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
}

export default ModalFull;

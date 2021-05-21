import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ViewRulesModal({ modalIsOpen, closeModal, afterOpenModal, content }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-content">
          <h2>Hello</h2>
          <div>{content}</div>
          <button onClick={closeModal}>close</button>
        </div>
      </Modal>
    </div>
  );
}

export default ViewRulesModal;

import React from "react";
import Modal from "react-modal";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  children: JSX.Element | JSX.Element[];
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "2rem",
    width: "70%",
    maxWidth: "400px",
    borderRadius: "8px",
    backgroundColor: "#22242d",
    border: 0,
  },
  overlay: {
    zIndex: 100,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
};

function BaseModal({ isOpen, handleClose, children }: Props) {
  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose} style={customStyles}>
      {children}
    </Modal>
  );
}

export default BaseModal;

import React from "react";
import { BenalModal } from "benal18-modal";
import "benal18-modal/dist/BenalModal.css";

function Modal({ title, opened, onClose, content, btnText = "Close" }) {
  if (!opened) return null;

  const formattedContent = content.split("\n").map((item, index) => (
    <div key={index} style={{ marginBottom: "8px" }}>
      {item}
    </div>
  ));

  return (
    <BenalModal
      isOpen={opened}
      onClose={onClose}
      title={title}
      closeButtonText={btnText}
      showCloseButton={true}
    >
      <div style={{ padding: "16px" }}>{formattedContent}</div>
    </BenalModal>
  );
}

export default Modal;

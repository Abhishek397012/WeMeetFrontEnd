import React from "react";
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      className="btn btn-light center modal-button"
      ref={buttonRef}
      onClick={showModal}
    >
      <i className="fa fa-edit"></i>
      {triggerText}
    </button>
  );
};
export default Trigger;

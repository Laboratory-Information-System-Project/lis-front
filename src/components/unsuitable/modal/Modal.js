import React from "react";
import "../../../styles/modal.scss";

function Modal(props) {

    function closeModal() {
        props.closeModal();
    }

    return (
        <div className="Modal" onClick={closeModal}>
            <div className="modalBody" onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>

    )
}

export default Modal;
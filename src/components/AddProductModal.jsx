/* eslint-disable react/prop-types */

import { useState } from "react";
import ReactDom from "react-dom";

function AddProductModal({ open, onClose }) {
  const [newProductName, setNewProductName] = useState("");
  const [newUnitCount, setNewUnitCount] = useState(-1);

  function handleConfirmClick() {
    if (newProductName === "" || newUnitCount < 0) {
      alert("Invalid input");
      return;
    }
  }

  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div className="Overlay" />
      <div className="AddProductModal">
        <form>
          <label>New Product Name:</label>
          <br />

          <input
            onChange={(e) => setNewProductName(e.target.value)}
            className="InputBoxNewName"
            required={true}
          />
          <br />

          <label>New Product Count:</label>
          <br />

          <input
            type="number"
            onChange={(e) => setNewUnitCount(e.target.value)}
            className="InputBoxAlterCount"
            min={"0"}
            required={true}
          />
          <br />

          <div className="ButtonContainer">
            <button
              type="button"
              onClick={() => handleConfirmClick()}
              className="ButtonConfirm"
            >
              Confirm
            </button>
            <button type="button" onClick={onClose} className="ButtonCancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default AddProductModal;

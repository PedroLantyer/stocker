/* eslint-disable react/prop-types */

import { useState } from "react";
import "../styles/EditProduct.css";
import ReactDom from "react-dom";
import { addProduct } from "../utils/productManagament";

function AddProductModal({ open, onClose, proprietaryId }) {
  const [newProductName, setNewProductName] = useState("");
  const [newUnitCount, setNewUnitCount] = useState(1);

  async function handleConfirmClick() {
    if (newProductName.size < 3 || newUnitCount < 0) {
      alert(
        "Invalid input. Please insert a unit count equal or larger than zero, and a product with at least 3 chars"
      );
      return;
    }
    await addProduct(newProductName, newUnitCount, proprietaryId).then(
      (res) => {
        console.log(`Product Added: ${res}`);
      }
    );
    onClose();
  }

  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div className="Overlay" />
      <div className="EditProductModal">
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
            value={newUnitCount}
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

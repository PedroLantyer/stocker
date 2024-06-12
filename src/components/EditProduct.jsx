/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/EditProduct.css";
import ReactDom from "react-dom";
import { updateProductName, updateUnitCount } from "../utils/productManagament";

function EditProductModal({ open, onClose, productId }) {
  const [newProductName, setNewProductName] = useState("");
  const [newUnitCount, setNewUnitCount] = useState(-1);
  const [nameWillChange, setNameWillChange] = useState(false);
  const [countWillChange, setCountWillChange] = useState(false);

  async function handleConfirmClick() {
    if (nameWillChange) {
      await updateProductName(productId, newProductName).then((res) => {
        console.log(`Product updated: ${res}`);
      });
    }
    if (countWillChange) {
      await updateUnitCount(productId, newUnitCount).then((res) => {
        console.log(`Unit Count Updated: ${res}`);
      });
    }
    onClose();
  }

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="Overlay" />
      <div className="EditProductModal">
        <form>
          <label>New Product Name:</label>
          <br />

          <input
            type="checkbox"
            checked={nameWillChange}
            className="ProductNameWillChangeCheckbox"
            onChange={() => {
              setNameWillChange(!nameWillChange);
            }}
          ></input>
          <input
            onChange={(e) => setNewProductName(e.target.value)}
            disabled={!nameWillChange}
            className="InputBoxNewName"
            required={nameWillChange}
          />
          <br />

          <label>New Product Count:</label>
          <br />
          <input
            type="checkbox"
            checked={countWillChange}
            onChange={() => {
              setCountWillChange(!countWillChange);
            }}
          />
          <input
            type="number"
            onChange={(e) => setNewUnitCount(e.target.value)}
            disabled={!countWillChange}
            className="InputBoxAlterCount"
            min={"0"}
            required={countWillChange}
          />
          <br />

          <div className="ButtonContainer">
            <button
              type="button"
              onClick={() => handleConfirmClick()}
              disabled={countWillChange || nameWillChange ? false : true}
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

export default EditProductModal;

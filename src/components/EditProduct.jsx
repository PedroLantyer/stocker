/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/EditProduct.css";
import ReactDom from "react-dom";

function EditProductModal({ open, onClose }) {
  const [newProductName, setNewProductName] = useState("");
  const [newUnitCount, setNewUnitCount] = useState(-1);

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="Overlay" />
      <div className="EditProductModal">
        <form>
          <input
            onChange={(e) => setNewProductName(e.target.value)}
            className="InputBoxNewName"
          />
          <br />
          <input
            type="number"
            onChange={(e) => setNewUnitCount(e.target.value)}
          />
          <br />
          <button type="button" onClick={onClose}>
            Close modal
          </button>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default EditProductModal;

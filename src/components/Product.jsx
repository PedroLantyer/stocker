/* eslint-disable react/prop-types */
import TrashIcon from "../assets/trash.svg?react";
import EditButton from "../assets/editButton.svg?react";
import { deleteProduct } from "../utils/productManagament";
import EditProductModal from "./EditProduct";
import { useState } from "react";

function Product({ productObj, productCallBack }) {
  function triggerDeletion() {
    deleteProduct(productObj.productId).then(productCallBack);
  }

  const [editIsOpen, setEditIsOpen] = useState(false);

  return (
    <ul>
      <div className="ProductGrid">
        <div className="ProductNameBlock">
          <p className="ProductName">{productObj.productName}</p>
        </div>
        <div className="UnitCountBlock">
          <p className="ProductUnitCount">{productObj.unitCount}</p>
        </div>
        <div className="EditButtonBlock">
          <button type="button" className="EditItemButton">
            <div className="EditItemButton">
              <EditButton />
            </div>
          </button>
        </div>
        <div className="DeleteButtonBlock">
          <button
            type="button"
            className="DeleteProductButton"
            onClick={() => triggerDeletion()}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </ul>
  );
}

export default Product;

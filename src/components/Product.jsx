/* eslint-disable react/prop-types */
import TrashIcon from "../assets/trash.svg?react";
import { deleteProduct } from "../utils/productManagament";

function Product({ productObj }) {
  function triggerDeletion() {
    deleteProduct(productObj.productId);
  }

  return (
    <ul>
      <div className="ProductGrid">
        <p className="ProductName">{productObj.productName}</p>
        <p className="ProductUnitCount">{productObj.unitCount}</p>
        <button
          type="button"
          className="DeleteProductButton"
          onClick={() => triggerDeletion()}
        >
          <TrashIcon />
        </button>
      </div>
    </ul>
  );
}

export default Product;

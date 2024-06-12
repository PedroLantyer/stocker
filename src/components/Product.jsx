/* eslint-disable react/prop-types */
//import { ReactComponent as trashIcon } from "../assets/trash.svg";

function Product({ productObj }) {
  return (
    <ul>
      <div className="ProductGrid">
        <p className="ProductName">{productObj.productName}</p>
        <p className="ProductUnitCount">{productObj.unitCount}</p>
        <button type="button" className="DeleteProductButton">
          X
        </button>
      </div>
    </ul>
  );
}

export default Product;

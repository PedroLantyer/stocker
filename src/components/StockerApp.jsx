import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUrl } from "../utils/routerPath";
import "../styles/StockerApp.css";
import getDefaultState from "../utils/getDefaultState";
import { getProductList } from "../utils/productManagament";
import Product from "./Product";

function StockerApp() {
  const { state } = useLocation();
  const stateObj = getDefaultState(state);
  const { logged, username, id } = stateObj;
  const nav = useNavigate();

  function getProducts(logged) {
    if (logged) {
      getProductList(id).then((res) => setProducts(res));
    }
  }

  function productCallBack() {
    getProducts(true);
  }

  function leaveOrStay(id, logged) {
    if (id < 1 || !logged) {
      console.log("Not logged in, sending you back");
      nav(loginUrl);
    } else {
      console.log(`Welcome ${username}`);
    }
  }

  useEffect(() => {
    leaveOrStay(id, logged);
  }, []);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts(logged);
  }, []);

  return (
    <div className="StockerApp">
      <h1>Stocker App</h1>
      <ul className="ProductList">
        <div className="TitleContainer">
          <div className="LeftTitleSection">
            <p className="ProductNameTitle">Product Name</p>
          </div>
          <div className="RightTitleSection">
            <p className="unitCountTitle">Units</p>
          </div>
        </div>
        {products.map((product) => (
          <Product
            productObj={product}
            productCallBack={productCallBack}
            key={product.productId}
          />
        ))}
      </ul>
    </div>
  );
}

export default StockerApp;

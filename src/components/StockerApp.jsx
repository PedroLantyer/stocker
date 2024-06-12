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

  useEffect(() => {
    if (id < 1 || !logged) {
      console.log("Not logged in, sending you back");
      nav(loginUrl);
    } else {
      console.log(`Welcome ${username}`);
    }
  }); //IF Not logged in, send user back to login screen

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductList(2).then((res) => setProducts(res));
  }, []);

  return (
    <div className="StockerApp">
      <h1>Stocker App</h1>
      <ul>
        {products.map((product) => (
          <Product productObj={product} key={product.productId} />
        ))}
      </ul>
    </div>
  );
}

export default StockerApp;

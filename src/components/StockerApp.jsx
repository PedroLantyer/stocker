import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUrl } from "../utils/routerPath";
import "../styles/StockerApp.css";
import getDefaultState from "../utils/getDefaultState";
import { getProductList } from "../utils/productManagament";
import Product from "./Product";
import PlusCircle from "../assets/plusCircle.svg?react";
import AddProductModal from "./AddProductModal";

function StockerApp() {
  const { state } = useLocation();
  const stateObj = getDefaultState(state);
  const { logged, username, id } = stateObj;
  const nav = useNavigate();

  const [addIsOpen, setAddIsOpen] = useState(false);

  function handleClose() {
    setAddIsOpen(false);
    getProducts(true);
  }

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
      <div className="ButtonAddItemContainer">
        <AddProductModal
          open={addIsOpen}
          onClose={() => {
            handleClose();
          }}
          proprietaryId={id}
        />
        <button
          type="button"
          className="ButtonAddItem"
          onClick={() => setAddIsOpen(true)}
        >
          <PlusCircle />
        </button>
      </div>
      <footer className="Footer">
        <p>Logged on!</p>
        <p>
          User: <span className="usernameLabel">{username}</span>
        </p>
      </footer>
    </div>
  );
}

export default StockerApp;

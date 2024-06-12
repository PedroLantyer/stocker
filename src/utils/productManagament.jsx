import axios from "axios";
import { getProductListLink } from "./apiLinks";

async function getProductList(proprietaryId) {
  try {
    const url = getProductListLink;
    const res = await axios.get(`${url}${proprietaryId}`);
    const result = res.data;
    if (!Array.isArray(result)) {
      throw "Invalid return type";
    }
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    const emptyArr = [];
    return emptyArr;
  }
}

function deleteProduct(productId) {
  console.log(productId);
}

export { getProductList, deleteProduct };

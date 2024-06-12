import axios from "axios";
import { deleteProductLink, getProductListLink } from "./apiLinks";

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

async function deleteProduct(productId) {
  try {
    const url = deleteProductLink;
    const res = await axios.delete(`${url}${productId}`);
    const result = res.data;
    if (typeof result !== "boolean") {
      throw "Error returned variable wasn't a boolean";
    }
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export { getProductList, deleteProduct };

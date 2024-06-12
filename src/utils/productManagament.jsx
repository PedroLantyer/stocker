import axios from "axios";
import {
  addProductLink,
  deleteProductLink,
  getProductListLink,
  getUpdateProductNameUrl,
  getUpdateUnitCountUrl,
} from "./apiLinks";

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

async function updateProductName(productId, updatedName) {
  try {
    const url = getUpdateProductNameUrl(productId, updatedName);
    if (url === "ERROR") {
      throw "Error: API URL is invalid";
    }
    const res = await axios.patch(url);
    const result = res.data;
    if (typeof result !== "boolean") {
      throw "Error: returned variable wasn't a boolean";
    }
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function updateUnitCount(productId, unitCount) {
  try {
    const url = getUpdateUnitCountUrl(productId, unitCount);
    if (url === " ERROR") {
      throw "Error: API URL is invalid";
    }
    const res = await axios.patch(url);
    const result = res.data;
    if (typeof result !== "boolean") {
      throw "Error: returned variable wasn't a boolean";
    }
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function addProduct(productName, unitCount, proprietaryId) {
  try {
    const url = addProductLink;
    const dataObj = {
      productName: productName,
      unitCount: unitCount,
      proprietaryId: proprietaryId,
    };
    const res = await axios.post(url, dataObj);
    const result = res.data;
    if (typeof result !== "boolean") {
      throw "Error: returned variable wasn't a boolean";
    }
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export {
  getProductList,
  deleteProduct,
  updateProductName,
  updateUnitCount,
  addProduct,
};

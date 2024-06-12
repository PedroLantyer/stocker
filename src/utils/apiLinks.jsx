const hostLink = "http://localhost:8080";

function getLoginValidationUrl(username, password) {
  try {
    const url = `${hostLink}/login?username=${username}&password=${password}`;
    return url;
  } catch (error) {
    console.log(error);
    return "ERROR";
  }
}

function getUpdateProductNameUrl(productId, updatedName) {
  try {
    const url = `${hostLink}/updateproductname?productId=${productId}&updatedName=${updatedName}`;
    return url;
  } catch (error) {
    console.log(error);
    return " ERROR";
  }
}

function getUpdateUnitCountUrl(productId, unitCount) {
  try {
    const url = `${hostLink}/updateunitcount?productId=${productId}&unitCount=${unitCount}`;
    return url;
  } catch (error) {
    console.log(error);
    return "ERROR";
  }
}

const deleteProductLink = `${hostLink}/deleteproduct?productId=`;
const getProductListLink = `${hostLink}/getproductlist?proprietaryId=`;
const registerLink = `${hostLink}/register`;
const userIsDuplicateCheckLink = `${hostLink}/register/usercheck?username=`;
const emailIsDuplicateCheckLink = `${hostLink}/register/duplicatemail?email=`;
const addProductLink = `${hostLink}/addproduct`;

export {
  getLoginValidationUrl,
  getUpdateProductNameUrl,
  getUpdateUnitCountUrl,
  getProductListLink,
  deleteProductLink,
  registerLink,
  userIsDuplicateCheckLink,
  emailIsDuplicateCheckLink,
  addProductLink,
};

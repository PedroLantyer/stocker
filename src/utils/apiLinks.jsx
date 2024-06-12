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

const deleteProductLink = `${hostLink}/deleteproduct?productId=`;
const getProductListLink = `${hostLink}/getproductlist?proprietaryId=`;
const registerLink = `${hostLink}/register`;
const userIsDuplicateCheckLink = `${hostLink}/register/usercheck?username=`; //INSERT PARAM AFTER THE EQUAL SIGN
const emailIsDuplicateCheckLink = `${hostLink}/register/duplicatemail?email=`; //INSERT PARAM AFTER THE EQUAL SIGN

export {
  getLoginValidationUrl,
  getProductListLink,
  deleteProductLink,
  registerLink,
  userIsDuplicateCheckLink,
  emailIsDuplicateCheckLink,
};

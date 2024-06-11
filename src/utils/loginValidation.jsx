import axios from "axios";
import { getLoginValidationUrl } from "./apiLinks";

async function validateLoginInfo(usernameStr, passwordStr) {
  try {
    const url = getLoginValidationUrl(usernameStr, passwordStr);
    if (url === "ERROR") {
      throw "Error invalid API URL";
    }

    const res = await axios.get(url);
    const resultObj = res.data;

    if (typeof resultObj !== "object") {
      throw "Error, API returned invalid results";
    }
    return resultObj;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export { validateLoginInfo };

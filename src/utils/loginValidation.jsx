import axios from "axios";
import { loginValidationLink } from "./apiLinks";

async function validateLoginInfo(usernameStr, passwordStr) {
  const res = await axios.get(
    `${loginValidationLink[0]}${usernameStr}${loginValidationLink[1]}${passwordStr}`
  );
  try {
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

export { validateLoginInfo };

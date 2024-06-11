import axios from "axios";

function meetsPasswordRequirements(password) {
  const charRequirements = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$"); //Checks for upper case, lower case, and number
  const result =
    password.length >= 8 && charRequirements.test(password) ? true : false;
  return result;
}

function meetsUsernameRequirements(username) {
  const invalidChars = new RegExp("[^a-zA-Z0-9]"); //Checks for any character that isn't upper case, lower case, or num
  const result =
    username.length >= 6 && !invalidChars.test(username) ? true : false;
  return result;
}

async function verifyEmailIsDuplicate(url, email) {
  const res = await axios.get(`${url}${email}`);
  try {
    const result = res.data;
    if (typeof result !== "boolean") {
      throw "Error returned variable wasn't a boolean";
    }
    return result;
  } catch (error) {
    console.log(error);
    return true;
  }
}

async function verifyUserIsDuplicate(url, username) {
  const res = await axios.get(`${url}${username}`);
  try {
    const result = res.data;
    if (typeof result !== "boolean") {
      throw "Error returned variable wasn't a boolean";
    }
    return result;
  } catch (error) {
    console.log(error);
    return true;
  }
}

async function register(username, email, password) {
  //const res = await axios.get()
  console.log();
}

export {
  meetsPasswordRequirements,
  meetsUsernameRequirements,
  verifyEmailIsDuplicate,
  verifyUserIsDuplicate,
};

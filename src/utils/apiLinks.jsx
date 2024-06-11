const loginValidationLink = [
  "http://localhost:8080/login?username=",
  "&password=",
];

const registerLink = [
  "http://localhost:8080/register?username=",
  "&email=",
  "&password=",
];

const userIsDuplicateCheckLink =
  "//localhost:8080/register/usercheck?username="; //INSERT PARAM AFTER THE EQUAL SIGN
const emailIsDuplicateCheckLink =
  "//localhost:8080/register/duplicatemail?email="; //INSERT PARAM AFTER THE EQUAL SIGN

export {
  loginValidationLink,
  registerLink,
  userIsDuplicateCheckLink,
  emailIsDuplicateCheckLink,
};

import { useState } from "react";
import {
  emailIsDuplicateCheckLink,
  userIsDuplicateCheckLink,
} from "../utils/apiLinks";
import {
  meetsPasswordRequirements,
  meetsUsernameRequirements,
  verifyEmailIsDuplicate,
  verifyUserIsDuplicate,
} from "../utils/registryRequirements";

function RegistrationForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  async function submitRegistration() {
    if (password !== passwordRepeat) {
      alert("passwords don't match");
      return;
    }

    if (!meetsUsernameRequirements(username)) {
      alert("username requirements not fulfilled");
      return;
    }

    if (!meetsPasswordRequirements(password)) {
      alert("password requirements not fulfilled");
      return;
    }

    const userIsDuplicate = await verifyUserIsDuplicate(
      userIsDuplicateCheckLink,
      username
    );
    if (userIsDuplicate) {
      alert("User already exists.\n Please Select a Different Username");
      return;
    }

    const emailIsDuplicate = await verifyEmailIsDuplicate(
      emailIsDuplicateCheckLink,
      email
    );
    if (emailIsDuplicate) {
      alert(
        "The selected e-mail is already registered. Please us a Different one"
      );
      return;
    }
    console.log("Success!");
  }

  return (
    <form className="LoginForm">
      <p>Username</p>
      <input
        type="text"
        value={username}
        className="InputBox"
        onChange={(e) => setUsername(e.target.value)}
      />

      <p>Email</p>
      <input
        type="email"
        value={email}
        className="InputBox"
        onChange={(e) => setEmail(e.target.value)}
      />

      <p>Password</p>
      <input
        type={passwordVisible ? "text" : "password"}
        value={password}
        className="InputBox"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <p>Confirm Password</p>
      <input
        value={passwordRepeat}
        type={passwordVisible ? "text" : "password"}
        className="InputBox"
        onChange={(e) => setPasswordRepeat(e.target.value)}
      />

      <br />
      <label>
        <input
          type="checkbox"
          id="showPasswordCheckBox"
          onClick={() => setPasswordVisible(!passwordVisible)}
        />
        Show Password
      </label>
      <br />
      <button
        type="button"
        className="LoginAndRegisterButtons"
        onClick={submitRegistration}
      >
        Submit
      </button>
    </form>
  );
}

export default RegistrationForm;

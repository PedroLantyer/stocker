import { useState } from "react";

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

function RegistrationForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  function submitRegistration() {
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
      <button className="LoginAndRegisterButtons" onClick={submitRegistration}>
        Submit
      </button>
    </form>
  );
}

export default RegistrationForm;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateLoginInfo } from "../utils/loginValidation";
import { appUrl } from "../utils/routerPath";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const nav = useNavigate();

  async function attemptLogin() {
    if (username.length == 0 || password.length == 0) {
      alert("Please type your username and password");
      return;
    }

    //const loginIsValid = await validateLoginInfo(username, password);
    const userObj = await validateLoginInfo(username, password);
    try {
      if (typeof userObj !== "object") {
        throw "Invalid return for login validation";
      }

      if (userObj.id < 0) {
        alert("Invalid credentials");
      }

      console.log("Logged In!");
      nav(appUrl, {
        state: { logged: true, id: userObj.id, username: userObj.username },
      });
    } catch (error) {
      console.log(error);
    }

    /*if (!loginIsValid) {
      alert("Invalid credentials");
    } else {
      console.log("Logged In!");
      nav(appUrl, { state: loginIsValid });
    }*/
  }

  return (
    <form className="LoginForm">
      <p className="LoginFormPar">Username</p>
      <input
        className="InputBox"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <p className="LoginFormPar">Password</p>
      <input
        className="InputBox"
        id="password"
        value={password}
        type={passwordVisible ? "text" : "password"}
        onChange={(e) => setPassword(e.target.value)}
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
        onClick={attemptLogin}
      >
        Login
      </button>

      <p className="LoginFormPar">{"Don't have an account?"}</p>
      <Link to="/registrationform">
        <button type="button" className="LoginAndRegisterButtons">
          Register
        </button>
      </Link>
    </form>
  );
}

export default LoginForm;

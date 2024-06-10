import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <form className="LoginForm">
      <p className="LoginFormPar">Username</p>
      <input className="InputBox" id="username"></input>
      <p className="LoginFormPar">Password</p>
      <input className="InputBox" id="password" type="password"></input>
      <br />
      <button className="LoginAndRegisterButtons">Login</button>

      <p className="LoginFormPar">{"Don't have an account?"}</p>
      <Link to="/registrationform">
        <button className="LoginAndRegisterButtons">Register</button>
      </Link>
    </form>
  );
}

export default LoginForm;

/* API DATA FETCH DEMONSTRATION
  const apiLinkArr = ["https://catfact.ninja/fact"];
  const [apiRes, setApiRes] = useState("");

  function getApiRes(url) {
    axios.get(url).then((res) => {
      console.log(res.data.fact);
      setApiRes(res.data.fact);
    });
  }

  useEffect(() => {
    getApiRes(apiLinkArr[0]);
  }, []); */

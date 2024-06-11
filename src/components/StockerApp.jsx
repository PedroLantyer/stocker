import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUrl } from "../utils/routerPath";

function getDefaultState(state) {
  if (state === null || typeof state !== "object") {
    const defaultState = { logged: false, username: "", id: -1 };
    return defaultState;
  }
  return state;
}

function StockerApp() {
  const { state } = useLocation();
  const stateObj = getDefaultState(state);
  const { logged, username, id } = stateObj;
  const nav = useNavigate();

  useEffect(() => {
    if (id < 1 || !logged) {
      console.log("Not logged in, sending you back");
      nav(loginUrl);
    } else {
      console.log(`Welcome ${username}`);
    }
  }); //IF Not logged in, send user back to login screen

  return (
    <div>
      <h1>Stocker App</h1>
    </div>
  );
}

export default StockerApp;

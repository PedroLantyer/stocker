import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUrl } from "../utils/routerPath";

function StockerApp() {
  const { state } = useLocation();
  const { logged, id, username } = state;

  const nav = useNavigate();

  useEffect(() => {
    typeof logged !== "boolean" || !state
      ? nav(loginUrl)
      : console.log(`Welcome ${username}`);
  }); //IF Not logged in, send user back

  return (
    <div>
      <h1>Stocker App</h1>
    </div>
  );
}

export default StockerApp;

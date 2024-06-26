import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUrl } from "../utils/routerPath";

function HelloWorld() {
  const { state } = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    typeof state !== "boolean" || !state
      ? nav(loginUrl)
      : console.log(`Logged in: ${state}`);
  }); //IF Not logged in, send user back

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default HelloWorld;

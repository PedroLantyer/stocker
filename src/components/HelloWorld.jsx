import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function HelloWorld() {
  const { state } = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    typeof state !== "boolean" || !state
      ? nav("/")
      : console.log(`Logged in: ${state}`);
  }); //IF Not logged in, send user back

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default HelloWorld;

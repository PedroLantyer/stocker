import "./styles/App.css";
import LoginForm from "./components/LoginForm";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  function setLoginStatus(loginStatus) {
    if (loginStatus) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }

  return (
    <div>
      <LoginForm setLoginStatus={setLoginStatus} />
    </div>
  );
}

export default App;

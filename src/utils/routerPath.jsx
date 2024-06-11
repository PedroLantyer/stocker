import App from "../App";
import HelloWorld from "../components/HelloWorld";
import LoginForm from "../components/LoginForm";
import NotFoundPage from "../components/NotFound";
import RegistrationForm from "../components/RegistrationForm";

const loginUrl = "/login";
const appUrl = "/";
const registrationUrl = "/registrationform";

const reactRouterPaths = [
  { path: appUrl, element: <App />, errorElement: <NotFoundPage /> },
  { path: loginUrl, element: <LoginForm /> },
  { path: "/helloworld", element: <HelloWorld /> },
  { path: registrationUrl, element: <RegistrationForm /> },
];

export { reactRouterPaths, loginUrl, registrationUrl, appUrl };

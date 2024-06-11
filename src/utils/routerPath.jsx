import App from "../App";
import HelloWorld from "../components/HelloWorld";
import NotFoundPage from "../components/NotFound";
import RegistrationForm from "../components/RegistrationForm";

const loginUrl = "/";
const registrationUrl = "/registrationform";

const reactRouterPaths = [
  { path: "/", element: <App />, errorElement: <NotFoundPage /> },
  { path: "/helloworld", element: <HelloWorld /> },
  { path: "/registrationform", element: <RegistrationForm /> },
];

export { reactRouterPaths, loginUrl, registrationUrl };

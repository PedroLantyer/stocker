import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFoundPage() {
  return (
    <div>
      <h1>Error 404: Page Not Found</h1>
      <Link to="/" className="NotFoundLink">
        COUNTRY ROADS TAKE ME HOME
      </Link>
    </div>
  );
}

export default NotFoundPage;

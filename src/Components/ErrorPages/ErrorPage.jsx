import { Link } from "react-router-dom";

const ErrorPages = () => {
  return (
    <div>
      <h1>Oops!! 404 Error</h1>
      <Link className="bg-blue-500 px-6 py-2 text-white rounded-lg" to="/">
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPages;

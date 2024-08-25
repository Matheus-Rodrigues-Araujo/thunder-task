import { Link, useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

const Error = () => {
  const error = useRouteError() as RouteError;
  return (
    <div className="flex items-center justify-center bg-black min-h-screen">
      <div className="bg-gray-900 p-10 rounded-md">
        <h1 className="text-red-500 text-6xl">Oops!</h1>
        <p className="text-red-500 text-3xl">
          Sorry, an unexpected error has ocurred.
        </p>
        <p className="text-red-500 text-2xl">
          <i>{error.statusText || error.message}</i>
        </p>
        <p className="text-white font-medium text-xl mb-1">
          return to{" "}
          <Link to="/explore" className="text-white font-bold text-2xl mb-1">
            M★viesMax
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Error;

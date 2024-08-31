import { useRouteError } from "react-router-dom";
import { Brand } from "./brand";

interface RouteError {
  statusText?: string;
  message?: string;
}

const Error = () => {
  const error = useRouteError() as RouteError;
  return (
    <div className="flex items-center justify-center bg-black min-h-screen">
      <div className="w-98 h-60 bg-gray-900 grid gap-1 text-cyan-500 p-10 rounded-md">
        <h1 className="text-6xl text-white">Oops!</h1>
        <p className="text-xl text-white">
          Error has ocurred: <span className="text-red-400" >{error.statusText || error.message}</span>
        </p>
        <p className="flex items-center gap-1 text-white font-medium text-2xl mb-1">
          return to
          <Brand variant="primary" />
        </p>
      </div>
    </div>
  );
};

export default Error;

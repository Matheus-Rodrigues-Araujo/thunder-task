import { useRouteError } from "react-router-dom";
import { Brand } from "../../components/brand";

interface RouteError {
  statusText?: string;
  message?: string;
}

const Error = () => {
  const error = useRouteError() as RouteError;
  return (
    <div className="flex items-center justify-center bg-secondary-black min-h-screen">
      <div className="w-98 h-60 bg-secondary-white grid gap-1 text-primary-cerulean p-10 rounded-md">
        <h1>Oops!</h1>
        <p className="text-xl font-bold">
          Error has ocurred:{" "}
          <span className="text-secondary-mediumGray">
            {error.statusText || error.message}
          </span>
        </p>
        <p className="flex items-center gap-1 font-bold text-2xl ">
          return to <Brand variant="primary" />
        </p>
      </div>
    </div>
  );
};

export default Error;

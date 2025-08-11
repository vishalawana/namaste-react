import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
      <h1 className="text-5xl font-bold text-red-600 mb-2">OOPS</h1>
      <p className="text-lg text-gray-700 mb-2">Something went wrong</p>
      <p className="text-gray-500">{err.status}: {err.statusText}</p>
    </div>
  );
};
export default Error;

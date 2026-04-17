// AI generated 404

import { Link } from "react-router";

const ErrorPage=()=> {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      
      {/* 404 Text */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#244D3F]">
        404
      </h1>

      {/* Message */}
      <p className="mt-4 text-lg sm:text-xl text-gray-600">
        Oops! Page not found.
      </p>

      <p className="text-sm sm:text-base text-gray-500 mt-2 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 text-[#244D3F] border-2 border-[#244D3F] rounded-lg shadow-sm hover:opacity-90 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
export default ErrorPage;
import React from "react";
import { Link } from "react-router-dom";

const ErrorShow = () => {
  const searchData = new URLSearchParams(window.location.search);
  const message = searchData.get("message");

  const goBackHandler = () => {
    window.location.href = "https://reviewqr.xyz";
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-5 shadow-xl rounded-xl bg-base-100">
        <p className="text-rose-600 font-semibold text-lg">Payment {message}</p>

        <div className="text-center py-4">
          <Link to='/'>
            <button
              onClick={goBackHandler}
              className="bg-rose-500 px-5 py-1 rounded-md shadow-lg text-white"
            >
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorShow;

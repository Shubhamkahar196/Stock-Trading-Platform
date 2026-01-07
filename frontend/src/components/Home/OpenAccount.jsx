import React from "react";

export const OpenAccount = ({ onSignupClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center gap-4">

        <h3 className="text-2xl font-semibold">
          Open a Zerodha account
        </h3>

        <p className="text-gray-700 max-w-2xl">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>

        <button
          onClick={onSignupClick}
          className="mt-4 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
        >
          Sign up for free
        </button>

      </div>
    </div>
  );
};

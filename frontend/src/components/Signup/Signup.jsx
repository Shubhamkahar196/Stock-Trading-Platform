import React from "react";
import Navbar from "../Navbar/Navbar";

const Signup = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Navbar/>
      <div className="flex flex-col md:flex-row justify-center ">
        <h1 className="text-gray-700 font-medium text-2xl">Open a free demat & trading account online</h1>
        <p>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
        <img
          src="	https://zerodha.com/static/images/account_open.svg"
          alt="signuppageImage"
          className="w-full max-w-md"
        />

        
          <h2 className="text-gray-700 font-medium text-2xl ">SingUp now</h2>
          <br />
          <p className="text-gray-700 font-light">Or track your existing application</p>

          <input type="tel"  placeholder="enter your phone number" />

          <h3 className="text-white text-xl text-center bg-blue-500 rounded px-0.5 py-0.5">Get Otp</h3>
      </div>

      <div>
          <h2>Investment options with Zerodha demat account</h2>

          <div>
            <img src="" alt="stocks" className="max-w-md w-full"/>
           <h3 className="">Stocks
            <span><p>Invest in all exchange-list securities</p></span>
           </h3>
          </div>

      </div>
    </div>
  );
};

export default Signup;

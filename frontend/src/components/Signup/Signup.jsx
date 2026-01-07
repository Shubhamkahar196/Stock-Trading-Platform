import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { OpenAccount } from "../Home/OpenAccount";

const Signup = () => {
  const [playVideo, setPlayVideo] = useState(false);

  // ✅ Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-12">

        {/* ================= HERO SECTION ================= */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-2xl font-semibold text-gray-800">
              Open a free demat & trading account online
            </h1>
            <p className="text-gray-600">
              Start investing brokerage free and join a community of
              1.6+ crore investors and traders.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://zerodha.com/static/images/account_open.svg"
              alt="Signup"
              className="w-full max-w-md"
            />
          </div>
        </section>

        {/* ================= SIGNUP FORM ================= */}
        <section className="mt-14 max-w-md mx-auto text-center space-y-4">
          <h2 className="text-2xl font-medium text-gray-800">
            Sign up now
          </h2>
          <p className="text-gray-600">
            Or track your existing application
          </p>

          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full border rounded px-4 py-2"
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Get OTP
          </button>
        </section>

        {/* ================= INVESTMENT OPTIONS ================= */}
        <section className="mt-20">
          <h2 className="text-xl font-semibold text-center mb-10">
            Investment options with Zerodha demat account
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                img: "stocks-acop.svg",
                title: "Stocks",
                desc: "Invest in all exchange-listed securities",
              },
              {
                img: "mf-acop.svg",
                title: "Mutual funds",
                desc: "Commission-free direct mutual funds",
              },
              {
                img: "ipo-acop.svg",
                title: "IPO",
                desc: "Apply to IPOs instantly via UPI",
              },
              {
                img: "fo-acop.svg",
                title: "Futures & Options",
                desc: "Hedge and mitigate market risk",
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <img
                  src={`https://zerodha.com/static/images/${item.img}`}
                  alt={item.title}
                  className="mx-auto w-20"
                />
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Explore Investments
            </button>
          </div>
        </section>

        {/* ================= VIDEO SECTION ================= */}
        <section className="mt-20 flex flex-col items-center gap-6">
          <div className="w-full max-w-md cursor-pointer">
            {!playVideo ? (
              <img
                src="https://zerodha.com/static/images/steps-acop.svg"
                alt="Steps to open demat account"
                className="w-full"
                onClick={() => setPlayVideo(true)}
              />
            ) : (
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/JFx9tzhBrjE?autoplay=1"
                title="Zerodha account opening"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          <div className="max-w-md text-center space-y-2">
            <h2 className="text-xl font-semibold">
              Steps to open a demat account
            </h2>
            <p className="text-gray-600">
              Watch how easy it is to open a Zerodha demat and trading
              account online and start investing in minutes.
            </p>
          </div>
        </section>

        {/* ================= OPEN ACCOUNT CTA ================= */}
        <OpenAccount onSignupClick={scrollToTop} />

      </main>
    </>
  );
};

export default Signup;

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* Left side */}
        <div className="flex flex-col gap-4 text-center md:text-left md:w-1/2">
          <h3 className="text-gray-700 font-semibold text-xl">
            Unbeatable pricing
          </h3>
          <p className="text-gray-600">
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 flex flex-col items-center gap-6">

          {/* Pricing items */}
          <div className="flex flex-col sm:flex-row gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="" />
              <p>
                Free account <br /> opening
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="" />
              <p>
                Free equity delivery <br /> and direct mutual funds
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img src="https://zerodha.com/static/images/other-trades.svg" alt="" />
              <p>
                Intraday and <br /> F&O
              </p>
            </div>
          </div>

          <a href="#" className="text-blue-600 hover:underline">
            See pricing
          </a>

        </div>
      </div>
    </div>
  );
};

export default Pricing;

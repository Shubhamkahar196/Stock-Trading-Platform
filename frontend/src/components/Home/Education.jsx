
const Education = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* Left image */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="https://zerodha.com/static/images/index-education.svg"
            alt="Varsity"
            className="w-full max-w-md"
          />
        </div>

        {/* Right text */}
        <div className="md:w-1/2 flex flex-col gap-6 text-left">
          <h1 className="text-2xl font-semibold">
            Free and open market education
          </h1>

          <div>
            <p className="text-gray-600">
              Varsity, the largest online stock market education book in the world
              covering everything from the basics to advanced trading.
            </p>
            <a href="#" className="text-blue-600 hover:underline inline-flex items-center gap-1 mt-1">
              Varsity <span>→</span>
            </a>
          </div>

          <div>
            <p className="text-gray-600">
              TradingQ&amp;A, the most active trading and investment community in India
              for all your market related queries.
            </p>
            <a href="#" className="text-blue-600 hover:underline inline-flex items-center gap-1 mt-1">
              TradingQ&amp;A <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;

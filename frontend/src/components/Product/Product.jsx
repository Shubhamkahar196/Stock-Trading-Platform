import Navbar from "../Navbar/Navbar";

const Product = () => {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-16">

        {/* ================= PAGE HEADER ================= */}
        <section className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">
            Zerodha Products
          </h2>
          <h3 className="text-xl text-gray-700">
            Sleek, modern, and intuitive trading platforms
          </h3>
          <p className="text-gray-700">
            Check out our{" "}
            <a
              href="https://zerodha.com/investments"
              className="text-blue-600"
            >
              investment offerings
            </a>
          </p>
        </section>

        <hr className="opacity-10 my-12" />

        {/* ================= KITE ================= */}
        <section className="mt-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="https://zerodha.com/static/images/products-kite.png"
                alt="Kite"
                className="w-full"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold">Kite</h3>

              <p className="text-gray-700">
                Our ultra-fast flagship trading platform with streaming
                market data, advanced charts, an elegant UI, and more.
                Enjoy the Kite experience seamlessly on your Android and
                iOS devices.
              </p>

              <div className="flex gap-6 text-blue-700 font-medium">
                <a href="#">Try demo</a>
                <a href="#">Learn more</a>
              </div>

              <div className="flex gap-4 mt-4">
                <img
                  src="https://zerodha.com/static/images/google-play-badge.svg"
                  alt="Google Play"
                />
                <img
                  src="https://zerodha.com/static/images/appstore-badge.svg"
                  alt="App Store"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ================= CONSOLE ================= */}
        <section className="mt-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="https://zerodha.com/static/images/products-console.png"
                alt="Console"
                className="w-full"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold">Console</h3>

              <p className="text-gray-700">
                The central dashboard for your Zerodha account. Gain
                insights into your trades and investments with in-depth
                reports and visualisations.
              </p>

              <a
                href="#"
                className="text-blue-700 font-medium"
              >
                Learn more
              </a>
            </div>

          </div>
        </section>

      </main>
    </>
  );
};

export default Product;

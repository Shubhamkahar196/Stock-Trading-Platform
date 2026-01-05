const Products = () => {
  return (
   
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 py-8 px-4 max-w-7xl mx-auto">
      {/* Left side */}
      <div className="flex flex-col gap-6 md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-semibold">Trust with Confidence</h2>

        <div>
          <h3 className="text-lg font-medium">Customer-first always</h3>
          <p className="text-gray-600 mt-1">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium">No spam or gimmicks</h3>
          <p className="text-gray-600 mt-1">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium">The Zerodha universe</h3>
          <p className="text-gray-600 mt-1">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium">Do better with money</h3>
          <p className="text-gray-600 mt-1">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-col items-center md:w-1/2">
        <img
          src="https://zerodha.com/static/images/ecosystem.png"
          alt="Zerodha Ecosystem"
          className="w-full max-w-md"
        />

        <div className="flex gap-6 mt-4">
          <a href="#" className="text-blue-600 hover:underline">
            Explore our Products
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Try Kite Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;

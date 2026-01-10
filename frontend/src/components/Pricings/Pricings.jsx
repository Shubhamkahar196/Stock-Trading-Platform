import Navbar from "../Navbar/Navbar";
import PricingTable from "./PricingTable";

const Pricings = () => {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-16">

        {/* ================= HEADER ================= */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">Charges</h2>
          <h3 className="text-xl text-gray-700">
            List of all charges and taxes
          </h3>
        </section>

        {/* ================= PRICING CARDS ================= */}
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

            {/* Card 1 */}
            <div className="space-y-4">
              <img
                src="https://zerodha.com/static/images/pricing-eq.svg"
                alt="Free equity delivery"
                className="mx-auto w-24"
              />
              <h3 className="text-2xl font-semibold">
                Free equity delivery
              </h3>
              <p className="text-gray-700">
                All equity delivery investments (NSE, BSE) are absolutely
                free — ₹0 brokerage.
              </p>
            </div>

            {/* Card 2 */}
            <div className="space-y-4">
              <img
                src="https://zerodha.com/static/images/other-trades.svg"
                alt="Intraday and F&O trades"
                className="mx-auto w-24"
              />
              <h3 className="text-2xl font-semibold">
                Intraday and F&O trades
              </h3>
              <p className="text-gray-700">
                Flat ₹20 or 0.03% (whichever is lower) per executed order
                on intraday trades across equity, currency, and commodity
                trades. Flat ₹20 on all option trades.
              </p>
            </div>

            {/* Card 3 */}
            <div className="space-y-4">
              <img
                src="https://zerodha.com/static/images/pricing-eq.svg"
                alt="Free direct MF"
                className="mx-auto w-24"
              />
              <h3 className="text-2xl font-semibold">
                Free direct mutual funds
              </h3>
              <p className="text-gray-700">
                Invest in direct mutual funds with zero commissions and
                no brokerage charges.
              </p>
            </div>

          </div>
        </section>
        <PricingTable/>

      </main>
    </>
  );
};

export default Pricings;

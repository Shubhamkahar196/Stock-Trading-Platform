import { useState } from "react";

const PricingTable = () => {
  const [activeTab, setActiveTab] = useState("equity");

  const pricingData = {
    equity: {
      headers: [
        "",
        "Equity delivery",
        "Equity intraday",
        "F&O - Futures",
        "F&O - Options",
      ],
      rows: [
        [
          "Brokerage",
          "Zero Brokerage",
          "0.03% or ₹20/order",
          "0.03% or ₹20/order",
          "₹20/order",
        ],
        [
          "STT / CTT",
          "0.1% on buy & sell",
          "0.025% on sell",
          "0.02% on sell",
          "0.1% on sell",
        ],
        [
          "Transaction charges",
          "NSE: 0.00297% | BSE: 0.00375%",
          "NSE: 0.00297% | BSE: 0.00375%",
          "NSE: 0.00173% | BSE: 0",
          "NSE: 0.03503% | BSE: 0.0325%",
        ],
        ["GST", "18%", "18%", "18%", "18%"],
        ["SEBI charges", "₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
        [
          "Stamp charges",
          "0.015% or ₹1500 / crore",
          "0.003% or ₹300 / crore",
          "0.002% or ₹200 / crore",
          "0.003% or ₹300 / crore",
        ],
      ],
    },

    currency: {
      headers: ["", "Currency futures", "Currency options"],
      rows: [
        [
          "Brokerage",
          "0.03% or ₹20/order",
          "₹20/order",
        ],
        ["STT / CTT", "No STT", "No STT"],
        [
          "Transaction charges",
          "NSE: 0.00035% | BSE: 0.00045%",
          "NSE: 0.0311% | BSE: 0.001%",
        ],
        [
          "GST",
          "18% (brokerage + SEBI + transaction)",
          "18% (brokerage + SEBI + transaction)",
        ],
        ["SEBI charges", "₹10 / crore", "₹10 / crore"],
        [
          "Stamp charges",
          "0.0001% or ₹10 / crore",
          "0.0001% or ₹10 / crore",
        ],
      ],
    },

    commodity: {
      headers: ["", "Commodity futures", "Commodity options"],
      rows: [
        [
          "Brokerage",
          "0.03% or ₹20/order",
          "₹20/order",
        ],
        [
          "STT / CTT",
          "0.01% on sell (Non-agri)",
          "0.05% on sell",
        ],
        [
          "Transaction charges",
          "MCX: 0.0021% | NSE: 0.0001%",
          "MCX: 0.0418% | NSE: 0.001%",
        ],
        [
          "GST",
          "18% (brokerage + SEBI + transaction)",
          "18% (brokerage + SEBI + transaction)",
        ],
        [
          "SEBI charges",
          "₹1 / crore (Agri) | ₹10 / crore",
          "₹10 / crore",
        ],
        [
          "Stamp charges",
          "0.002% or ₹200 / crore",
          "0.003% or ₹300 / crore",
        ],
      ],
    },
  };

  const current = pricingData[activeTab];

  return (
    <section className="mt-24">

      {/* ================= TABS ================= */}
      <div className="flex gap-8 border-b mb-8">
        {["equity", "currency", "commodity"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-lg capitalize transition ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ================= TABLE ================= */}
      <div className="overflow-x-auto">
        <table className="w-full border text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              {current.headers.map((head, i) => (
                <th
                  key={i}
                  className="border px-4 py-3 font-medium text-gray-700"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {current.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="odd:bg-white even:bg-gray-50">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border px-4 py-3 text-gray-700"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  );
};

export default PricingTable;

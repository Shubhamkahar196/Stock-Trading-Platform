import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  CirclePlus,
  CircleUserRound,
} from "lucide-react";

const AccordionItem = ({ title, links, icon: Icon }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-3">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <div className="flex items-center gap-2 text-lg font-semibold">
          {Icon && <Icon size={18} />}
          {title}
        </div>

        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {/* Content */}
      {open && (
        <div className="mt-3 ml-6 space-y-2 text-gray-700">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="block hover:text-blue-600"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const CreateToken = () => {
  return (
    <main className="max-w-xl mx-auto mt-4 px-4">

      <AccordionItem
        title="Account Opening"
        icon={CirclePlus}
        links={[
          "Resident individual",
          "Minor",
          "Non Resident Indian (NRI)",
          "Company, Partnership, HUF and LLP",
          "Glossary",
        ]}
      />

      <AccordionItem
        title="Your Zerodha Account"
        icon={CircleUserRound}
        links={[
          "Your Profile",
          "Account modification",
          "Client Master Report (CMR) and DP",
          "Nomination",
          "Transfer and conversion of securities",
        ]}
      />

      <AccordionItem
        title="Kite"
        links={[
          "IPO",
          "Trading FAQs",
          "Margin Trading Facility (MTF) and Margins",
          "Charts and orders",
          "Alerts and Nudges",
          "General",
        ]}
      />

      <AccordionItem
        title="Coin"
        links={[
          "Mutual funds",
          "National Pension Scheme (NPS)",
          "Features on Coin",
          "Payments and Orders",
          "General",
        ]}
      />

    </main>
  );
};

export default CreateToken;

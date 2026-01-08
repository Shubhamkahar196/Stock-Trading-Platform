import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12  ">
        <div className=" flex flex-col mt-10 justify-center items-center">
          <h1 className="font-semibold text-gray-700 text-2xl">
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>

        <hr className=" opacity-10 mt-5" />


 <section className="flex flex-col lg:flex-row gap-10 mt-7">
  {/* Left text */}
  <div className="w-full lg:w-1/2 space-y-4">
    <p>
      We kick-started operations on the 15th of August, 2010 with the
      goal of breaking all barriers that traders and investors face in
      India in terms of cost, support, and technology. We named the
      company Zerodha, a combination of Zero and "Rodha", the Sanskrit
      word for barrier.
      <br /><br />
      Today, our disruptive pricing models and in-house technology have
      made us the biggest stock broker in India.
      <br /><br />
      Over 1.6+ crore clients place billions of orders every year
      through our powerful ecosystem of investment platforms,
      contributing over 15% of all Indian retail trading volumes.
    </p>
  </div>

  {/* Right text */}
  <div className="w-full lg:w-1/2 space-y-4">
    <p>
      In addition, we run a number of popular open online educational
      and community initiatives to empower retail traders and investors.
      <br /><br />
      <a href="https://rainmatter.com" className="text-blue-600">Rainmatter</a>, our fintech fund
      and incubator, has invested in several fintech startups with the
      goal of growing the Indian capital markets.
      <br /><br />
      Catch up on the latest updates on our{" "}
      <a href="https://zerodha.com/z-connect/" className="text-blue-600">blog</a>, see what the
      media is <a href="https://zerodha.com/media" className="text-blue-600">saying about us</a>,
      or learn more about our business and product{" "}
      <a href="https://zerodha.com/about/philosophy/" className="text-blue-600">philosophies</a>.
    </p>
  </div>
</section>

{/* ================= PEOPLE SECTION ================= */}
<section className="mt-20">
  <h3 className="text-3xl font-semibold text-center mb-10">
    People
  </h3>

  <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto">

    {/* Left: Image + name */}
    <div className="flex flex-col items-center text-center lg:w-1/3">
      <img
        src="https://zerodha.com/static/images/nithin-kamath.jpg"
        alt="Nithin Kamath"
        className="rounded-full w-40 h-40 object-cover"
      />
      <h3 className="mt-4 font-semibold text-lg">
        Nithin Kamath
      </h3>
      <p className="text-gray-600">
        Founder, CEO
      </p>
    </div>

    {/* Right: Description */}
    <div className="lg:w-2/3 text-gray-700 space-y-4">
      <p>
        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
        hurdles he faced during his decade-long stint as a trader. Today,
        Zerodha has changed the landscape of the Indian broking industry.
      </p>

      <p>
        He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
        and the Market Data Advisory Committee (MDAC).
      </p>

      <p>
        Playing basketball is his zen. Connect on{" "}
        <a
          href="https://nithinkamath.me"
          className="text-blue-600"
        >
          Homepage
        </a>{" "}
        /{" "}
        <a
          href="https://tradingqna.com/u/nithin/summary"
          className="text-blue-600"
        >
          TradingQnA
        </a>{" "}
        /{" "}
        <a
          href="https://x.com/Nithin0dha"
          className="text-blue-600"
        >
          Twitter
        </a>
      </p>
    </div>

  </div>
</section>

      </main>
    </>
  );
};

export default About;

import Navbar from "../Navbar/Navbar";
import Hero from './Hero'
import Products from "./Products";
import Pricing from './Pricing'
import Education from "./Education";
import {OpenAccount} from './OpenAccount'

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Products />
        <Pricing />
        <Education />
        <OpenAccount />
      </main>
    </>
  );
};

export default Home;

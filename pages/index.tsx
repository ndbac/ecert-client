import type { NextPage } from "next";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Feature from "../components/Features/Features";
import HowItWork from "../components/How it work/HowItWork";

const Home: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Header />
      <Feature />
      <HowItWork />
      <Footer />
    </div>
  );
};

export default Home;

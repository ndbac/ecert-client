import type { NextPage } from "next";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Feature from "../components/Features/Features";

const Home: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Header />
      <Feature />
      <Footer />
    </div>
  );
};

export default Home;

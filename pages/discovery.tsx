import type { NextPage } from "next";
import Navbar from "../components/Navigation/Navbar";
import Discovery from "../components/Discovery/Discovery";
import Footer from "../components/Footer/Footer";

const DiscoveryPage: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Discovery />
      <Footer />
    </div>
  );
};

export default DiscoveryPage;

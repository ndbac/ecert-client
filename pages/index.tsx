import type { NextPage } from "next";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
};

export default Home;

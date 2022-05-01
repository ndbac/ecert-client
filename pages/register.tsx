import type { NextPage } from "next";
import Navbar from "../components/Navigation/Navbar";
import Register from "../components/Register/Register";

const Home: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Register />
    </div>
  );
};

export default Home;

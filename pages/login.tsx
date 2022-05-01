import type { NextPage } from "next";
import Navbar from "../components/Navigation/Navbar";
import Login from "../components/Login/Login";

const Home: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Login />
    </div>
  );
};

export default Home;

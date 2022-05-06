import React from "react";
import Header from "./Header/Header";
import Features from "./Features/Features";
import HowItWork from "./How it work/HowItWork";
import RecommendPost from './Recommend Post/RecommendPost';

function Homepage() {
  return (
    <>
      <Header />
      <RecommendPost />
      <Features />
      <HowItWork />
    </>
  );
}

export default Homepage;

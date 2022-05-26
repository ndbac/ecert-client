import React from 'react'
import Header from './Header/Header'
import Features from './Features/Features'
import HowItWork from './How it work/HowItWork'
import Latest from './Posts/Latest'
import Recommend from './Posts/Recommend'
import Search from './Search/Search'

function Homepage() {
  return (
    <>
      <Header />
      <Features />
      <Search />
      <Latest />
      <Recommend />
      <HowItWork />
    </>
  )
}

export default Homepage

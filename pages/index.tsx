import type { NextPage } from 'next'
import Navbar from '../components/Navigation/Navbar'
import Footer from '../components/Footer/Footer'
import Homepage from '../components/Homepage/Homepage'

const Home: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  )
}

export default Home

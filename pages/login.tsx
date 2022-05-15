import type { NextPage } from 'next'
import Navbar from '../components/Navigation/Navbar'
import Login from '../components/Login/Login'
import Footer from '../components/Footer/Footer'

const LoginPage: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Login />
      <Footer />
    </div>
  )
}

export default LoginPage

import type { NextPage } from 'next'
import Navbar from '../components/Navigation/Navbar'
import Register from '../components/Register/Register'
import Footer from '../components/Footer/Footer'

const RegisterPage: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Register />
      <Footer />
    </div>
  )
}

export default RegisterPage

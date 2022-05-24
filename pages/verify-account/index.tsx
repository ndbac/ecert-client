import EmailVerify from '../../components/EmailVerify/EmailVerify'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navigation/Navbar'
import { useEffect } from 'react'
import { getItem } from '../../utils/helpers'
import { useRouter } from 'next/router'

function Verify() {
  const router = useRouter()
  useEffect(() => {
    if (!getItem('token')) {
      router.push('/')
    }
  })
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <EmailVerify />
      <Footer />
    </div>
  )
}

export default Verify

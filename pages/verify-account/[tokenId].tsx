import React from 'react'
import VerifySuccess from '../../components/EmailVerify/VerifySuccess'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navigation/Navbar'
import { useEffect } from 'react'
import { getItem } from '../../utils/helpers'
import { useRouter } from 'next/router'
function VerifyToken() {
  const router = useRouter()
  useEffect(() => {
    if (!getItem('token')) {
      router.push('/')
    }
  })
  return (
    <div>
      <Navbar />
      <VerifySuccess />
      <Footer />
    </div>
  )
}

export default VerifyToken

import ResetPassword from '../../components/ResetPassword/ResetPassword'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navigation/Navbar'
function Reset() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <ResetPassword />
      <Footer />
    </div>
  )
}

export default Reset

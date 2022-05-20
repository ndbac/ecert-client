import type { NextPage } from 'next'
import Navbar from '../components/Navigation/Navbar'
import Footer from '../components/Footer/Footer'
import CategoryCreator from '../components/Category/CategoryCreator'

const CategoryPage: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <CategoryCreator/>  
        <Footer />
    </div>
  )
}
export default CategoryPage
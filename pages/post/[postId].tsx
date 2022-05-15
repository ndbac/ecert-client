import type { NextPage } from 'next'
import Navbar from '../../components/Navigation/Navbar'
import Footer from '../../components/Footer/Footer'
import Post from '../../components/Post/Post'

const PostDetail: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Post />
      <Footer />
    </div>
  )
}

export default PostDetail

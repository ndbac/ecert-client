import type { NextPage } from "next";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer/Footer";
import Post from "../../components/Post/Post";
import Comment from "../../components/Comments/Comment";
const PostDetail: NextPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Post />
      <Comment />
      <Footer />
    </div>
  )
}

export default PostDetail

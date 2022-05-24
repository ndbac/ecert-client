import type { NextPage } from "next";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer/Footer";
import Post from "../../components/Post/Post";
import Comment from "../../components/Comments/Comment";
import {
  RootState,
} from '../../redux/modules/common/common.interface'
import { useSelector } from 'react-redux'
import { IPostState } from "../../redux/modules/post/interface/post.interface";
import { useRouter } from "next/router";

const PostDetail: NextPage = () => {
  const router = useRouter()
  const { postId } = router.query
  const store = useSelector<RootState>(
    (state) => state.postReducer
  ) as IPostState
  const { post } = store
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Post 
        key={post._id}
        title={post.title}
        description={post.description}
        userId={post.userId}
        createdAt={post.createdAt} 
        _id={post._id} 
        postId={postId}
        photoUrl={post.photoUrl}  
        categoryId={post.categoryId}
        />
      <Comment />
      <Footer />
    </div>
  )
}

export default PostDetail

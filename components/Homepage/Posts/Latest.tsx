import Postcard from "../../Discovery/Postcard/Postcard"
import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "../../../redux/modules/common/common.interface"
import { IPostState, IPostGet } from "../../../redux/modules/post/interface/post.interface"
import { useEffect } from "react"
import { getPost } from '../../../redux/modules/post/slices/post.slice'
import { useRouter } from 'next/router'
import Link from "next/link"

const Latest = () => {
    const store = useSelector<RootState>(
        (state) => state.postReducer
    ) as IPostState
    const { list } = store
    const load = 3
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    useEffect(() => {
        const { sort, page, limit } = router.query 
        const data = {
          sort: sort,
          page: page,
          limit: limit ? limit : load
        } as IPostGet
        dispatch(getPost(data))
      }, [dispatch, load, router.query])
    
    return(
        <section className="relative py-5 bg-black border-t">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl my-10 mx-auto text-center">
                    <span className="text-xl text-yellow-400 font-semibold">
                        Newest Posts
                    </span>
                </div>
                <div className="flex flex-wrap -m-3 mb-16">
                    {list?.map((post) => {
                        return(
                        <Postcard
                            key={post._id}
                            createdAt={post.createdAt}
                            title={post.title}
                            photoUrl={post.photoUrl}
                            description={post.description}
                            postId={post._id}
                            categoryId={post.categoryId}
                            userId={post.userId}
                        />
                        )
                    })}
                </div>
                <div className="text-center">
                    <button className="px-6 py-4 text-sm font-semibold bg-yellow-400 hover:bg-yellow-500 rounded transition duration-200">
                        <Link href="/discovery">
                            View More
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Latest
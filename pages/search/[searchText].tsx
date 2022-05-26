/* eslint-disable react/no-unescaped-entities */
import Postcard from '../../components/Discovery/Postcard/Postcard'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/modules/common/common.interface'
import { useRouter } from 'next/router'
import { IPostGet, IPostState } from '../../redux/modules/post/interface/post.interface'
import { getPost } from '../../redux/modules/post/slices/post.slice'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navigation/Navbar'
import Link from 'next/link'


// import BlueDot from "../../public/icons/dots/blue-dot-left-bars.svg";
// import YellowDot from "../../public/icons/dots/yellow-dot-right-shield.svg";

function Search() {
  const store = useSelector<RootState>(
    (state) => state.postReducer
  ) as IPostState
  const { list } = store
  
  const [load, setLoad] = useState(6)
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    const { sort, page, limit, search } = router.query 
    const data = {
      sort: sort,
      page: page,
      limit: limit ? limit : load,
      searchText: search
    } as IPostGet
    dispatch(getPost(data))
  }, [dispatch, load, router.query])

  const handleLimit = () => {
    setLoad((load) => load + 6)
  }

  return (
    <div className="max-w-screen-xl mx-auto">
        <Navbar />
            <section className="relative py-20 bg-black">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mb-20 mx-auto text-center">
                {list.length == 0 ? 
                    <span className="text-xl text-yellow-400 font-semibold">
                    Nothing found!
                    </span>
                : 
                    <span className="text-xl text-yellow-400 font-semibold">
                        Here's what we found with 
                    </span>
                }      
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
                
                {list.length != 0 ? 
                <div className="text-center">
                    {list.length > 6 ?
                    <button
                        className="px-6 py-4 text-sm font-semibold bg-yellow-400 hover:bg-yellow-500 rounded transition duration-200"
                        onClick={handleLimit}
                    >
                        View More Articles
                    </button>
                    :
                    <button
                        className="px-6 py-4 text-sm font-semibold bg-yellow-400 hover:bg-yellow-500 rounded transition duration-200"
                    >
                        End of result.
                    </button>
                    }
                    
                </div>
                :
                <div className="text-center">
                    <button className="px-6 py-4 text-sm font-semibold bg-yellow-400 hover:bg-yellow-500 rounded transition duration-200">
                        <Link href="/discovery">
                            Maybe something helpful here?
                        </Link>
                    </button>
                </div>
                }
            </div>
            </section>
        <Footer/>
    </div>
  )
}

export default Search

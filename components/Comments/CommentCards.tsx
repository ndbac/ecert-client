import React, { useState, useEffect } from 'react'
import CommentCard from './CommentCard'
import CommentInput from './CommentInput'
import { useRouter } from 'next/router'
import {
  AppDispatch,
  RootState,
} from '../../redux/modules/common/common.interface'
import {
  getComment,
  postComment,
  deleteComment,
  updateComment,
} from '../../redux/modules/comment/slices/comment.slice'
import { useDispatch, useSelector } from 'react-redux'
import {
  CommentState,
  CommentPost,
  CommentDelete,
  CommentUpdate,
  CommentGet,
} from '../../redux/modules/comment/interface/comment.interface'
import { getItem } from '../../utils/helpers'
import { getUserDetail } from '../../redux/modules/account/slices/account.slice'
import { AccountState } from '../../redux/modules/account/interface/account.interface'

const CommentCards = () => {
  const store = useSelector<RootState>(
    (state) => state.commentReducer
  ) as CommentState
  const account = useSelector<RootState>(
    (state) => state.accountReducer
  ) as AccountState
  const { user } = account
  const { list } = store

  const dispatch = useDispatch<AppDispatch>()

  const [load, setLoad] = useState(3)
  const router = useRouter()

  useEffect(() => {
    const { sort, page, limit, postId } = router.query
    if (postId) {
      const data = {
        sort: sort,
        page: page,
        limit: limit ? limit : load,
        parentId: postId,
      } as CommentGet
      dispatch(getComment(data))
    }
  }, [dispatch, load, router.query])

  useEffect(() => {
    const userId = getItem('id')
    if (userId) {
      dispatch(getUserDetail(userId))
    }
  }, [dispatch])
  const handleLimit = () => {
    setLoad((load) => load + 3)
  }

  let access = false
  if (user) {
    if (user.namespace === 'admin') access = true
  }

  const handleSubmit = (text: string) => {
    const token = getItem('token')
    const postId = router.query.postId
    if (token) {
      const data: CommentPost = {
        text: text,
        parentId: postId,
        token: token,
      }
      dispatch(postComment(data))
    }
  }
  const handleRemove = (id: string) => {
    const token = getItem('token')
    if (token) {
      const data: CommentDelete = {
        id: id,
        token: token,
      }
      dispatch(deleteComment(data))
    }
  }
  const handleUpdate = (text: string, id: string) => {
    const token = getItem('token')
    if (token) {
      const newData = {
        token: token,
        text: text,
        id: id,
      } as CommentUpdate
      dispatch(updateComment(newData))
    }
  }
  return (
    <div>
      <CommentInput
        onSubmit={handleSubmit}
        comment=""
        title="Add"
        cancelBtn={false}
      />
      <>
        {list?.map((item) => {
          return (
            <CommentCard
              key={item._id}
              text={item.text}
              userId={item.userId}
              show={access ? true : item.userId == getItem('id')}
              id={item._id}
              createdAt={item.createdAt}
              onRemove={() => handleRemove(item._id)}
              parentId={item.parentId}
              onUpdate={handleUpdate}
            />
          )
        })}
      </>

      <div className="text-center pt-6">
        <button
          className="px-8 py-3 text-md font-semibold bg-yellow-400 hover:bg-yellow-600 rounded transition duration-200"
          onClick={handleLimit}
        >
          See all
        </button>
      </div>
    </div>
  )
}

export default CommentCards

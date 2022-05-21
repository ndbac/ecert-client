import { useEffect } from 'react'
import type { NextPage } from 'next'
import CategoryCreator from '../../components/Category/CategoryCreator'
import { getUserDetail } from '../../redux/modules/account/slices/account.slice'
import { useDispatch, useSelector } from 'react-redux'
import {
  AppDispatch,
  RootState
} from '../../redux/modules/common/common.interface'
import { getItem } from '../../utils/helpers'
import { AccountState } from '../../redux/modules/account/interface/account.interface'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navigation/Navbar'
import Footer from '../../components/Footer/Footer'

const CategoryPage: NextPage = () => {
  const account = useSelector<RootState>(
    (state) => state.accountReducer
  ) as AccountState
  const { user } = account
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    const userId = getItem('id')
    if (userId) {
      dispatch(getUserDetail(userId))
    }
  }, [dispatch])
  const router = useRouter()
  useEffect(() => {
    if (user?.namespace !== 'admin' && user?.namespace !== 'project') {
      router.push('/')
    }
  })
  
  return (
    <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <CategoryCreator/>  
        <Footer />
    </div>
  )
}

export default CategoryPage
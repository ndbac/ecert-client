import { useRouter } from 'next/router'
import {
  AppDispatch,
  RootState,
} from '../../redux/modules/common/common.interface'
import { useDispatch, useSelector } from 'react-redux'
import { IVerifyAccountState } from '../../redux/modules/verify/interface/verify.interface'
import { verifyToken } from '../../redux/modules/verify/slices/verify.slice'
import { useEffect } from 'react'
import { getItem } from '../../utils/helpers'
import Image from 'next/image'
import Placeholder2 from '../../public/images/placeholder2.png'
import Placeholder3 from '../../public/images/placeholder3.png'

function VerifySuccess() {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector<RootState>(
    (state) => state.verifyReducer
  ) as IVerifyAccountState
  const { token } = router.query
  useEffect(() => {
    const loginToken = getItem('token')
    if (token && loginToken) {
      dispatch(verifyToken({ token, loginToken }))
    }
  }, [dispatch, token])
  const verifyStatus: boolean = store.status == 'account verified!'

  return (
    <section className="py-16 md:py-44 bg-black h-full relative overflow-hidden">
      <div className="hidden lg:block absolute bottom-1/2 left-0 h-64 ml-40 -mb-24 clip-path transform rotate-45">
        <div className="w-64 transform -rotate-45 object-cover">
          <Image src={Placeholder3} alt="" />
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-1/2 right-0 h-64 ml-40 -mb-24 clip-path transform rotate-45">
        <div className="w-64 transform -rotate-45 object-cover">
          <Image src={Placeholder2} alt="" />
        </div>
      </div>
      {verifyStatus ? (
        <div className="flex items-center justify-center p-5 min-w-screen">
          <div className="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
            <h3 className="text-4xl pb-7 font-bold">Account Activated</h3>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <p>Hello!</p>
            <p className="mt-4 text-sm">
              Thank you your email has been verified. Your account is now
              active.
            </p>
            <div className="mt-4"></div>
            <p className="text-sm mt-3">Thank you for choosing us!</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center p-5 min-w-screen">
          <div className="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
            <h3 className="text-4xl pb-7 font-bold">404 Not Found</h3>
          </div>
        </div>
      )}
    </section>
  )
}

export default VerifySuccess

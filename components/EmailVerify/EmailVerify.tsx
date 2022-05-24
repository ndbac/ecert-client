/* eslint-disable react/no-unescaped-entities */
import {
  AppDispatch,
  RootState,
} from '../../redux/modules/common/common.interface'
import { createVerifyAccountToken } from '../../redux/modules/verify/slices/verify.slice'
import { useDispatch, useSelector } from 'react-redux'
import { IVerifyAccountState } from '../../redux/modules/verify/interface/verify.interface'
import { useState } from 'react'
import { getItem } from '../../utils/helpers'
import Image from 'next/image'
import Placeholder2 from '../../public/images/placeholder2.png'
import Placeholder3 from '../../public/images/placeholder3.png'
import PhotoWomen from '../../public/images/photo-women.png'
function EmailVerify() {
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector<RootState>(
    (state) => state.verifyReducer
  ) as IVerifyAccountState

  const [alert, setAlert] = useState(false)
  const handleVerify = () => {
    setAlert(true)
    const token = getItem('token')
    if (token) {
      dispatch(createVerifyAccountToken(token))

    }
  }
  let message;
  if (store.serverErr =='Rejected') {
    message = (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">
          Something seriously bad happened.
        </span>
      </div>
    )
  }else {
    message = (
      <div
        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Success: </strong>
        <span className="block sm:inline">Check your email.</span>
      </div>
    )
  }
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="hidden lg:block absolute -bottom-10 left-0 h-64 ml-40 -mb-24 clip-path transform rotate-45">
        <div className="w-64 transform -rotate-45 object-cover">
          <Image src={Placeholder3} alt="" />
        </div>
      </div>
      <div className="hidden lg:block absolute lg:bottom-1/2 bottom-0 -right-20 h-64 -mb-24 clip-path transform rotate-45">
        <div className="w-64 transform -rotate-45 object-cover">
          <Image src={Placeholder2} alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center p-5 min-w-screen md:mt-40">
        <div className="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
          <h3 className="text-4xl pb-7 font-bold">
            Thanks for signing up for Websitename!
          </h3>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <p>
            We're happy you are here. Let's get your email address verified:
          </p>
          <div className="mt-4 mb-3">
            <button
              className="px-5 py-2 ml-3 text-sm font-semibold bg-yellow-400 hover:bg-yellow-600 rounded-2xl transition duration-200"
              onClick={handleVerify}
            >
              Click to Verify Email
            </button>
          </div>
          {alert && !store.loading && message}
        </div>
      </div>
      <div className="hidden md:block absolute top-0 left-1/2 h-64 clip-path-2 transform rotate-45">
        <div className="w-64 transform -rotate-45 object-cover">
          <Image src={PhotoWomen} alt="" />
        </div>
      </div>
    </section>
  )
}

export default EmailVerify

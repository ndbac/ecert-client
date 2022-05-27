import Image from 'next/image'
import PhotoMan from '../../public/images/men3.png'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  AppDispatch,
  RootState,
} from '../../redux/modules/common/common.interface'
import { useDispatch, useSelector } from 'react-redux'
import { IVerifyAccountState } from '../../redux/modules/verify/interface/verify.interface'
import { createResetPasswordToken } from '../../redux/modules/verify/slices/verify.slice'
import { useState } from 'react'

const formSchema = Yup.object({
  email: Yup.string()
    .email('Email is not valid')
    .required('Please enter a valid email address'),
})

function ResetPassword() {
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector<RootState>(
    (state) => state.verifyReducer
  ) as IVerifyAccountState
  const [alert, setAlert] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (data) => {
      dispatch(createResetPasswordToken(data))
      setAlert(true)
      formik.resetForm()
    },
    validationSchema: formSchema,
  })
  let message
  if (store.serverErr == 'Rejected') {
    message = (
      <p className="text-md text-red-400 font-semibold text-center">
        Some thing bad happen!
      </p>
    )
  } else {
    message = (
      <p className="text-md text-green-400 font-semibold text-center">
        Please check your mail
      </p>
    )
  }

  return (
    <div className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="hidden lg:block">
              <Image src={PhotoMan} alt="" className="rounded-xl" />
            </div>
            <div className="w-full lg:w-1/2 bg-white p-5 md:rounded-lg lg:rounded-l-none">
              <div className="px-8 text-center">
                <h3 className="pt-4 mb-2 text-4xl font-bold">
                  Forgot Your Password?
                </h3>
                <p className="mb-4 text-sm text-gray-700">
                  We get it, stuff happens. Just enter your email address below
                  and we will send you a link to reset your password!
                </p>
              </div>
              <form
                className="px-8 pt-6 pb-8 bg-white rounded"
                onSubmit={formik.handleSubmit}
              >
                <div className="mb-4">
                  <input
                    value={formik.values.email}
                    onChange={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Type your e-mail"
                  />
                  <p className="mb-4 ml-6 text-red-600 font-semibold">
                    {' '}
                    {formik.touched.email && formik.errors.email}{' '}
                  </p>
                  {alert && !store.loading && message}
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-semibold bg-yellow-400 hover:bg-yellow-600 rounded-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Reset Password
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link href="/register">
                    <a
                      className="inline-block text-sm text-black align-baseline hover:text-gray-500"
                      href="./register.html"
                    >
                      Create an Account!
                    </a>
                  </Link>
                </div>
                <div className="text-center">
                  <Link href="login">
                    <a
                      className="inline-block text-sm text-black align-baseline hover:text-gray-500"
                      href="./index.html"
                    >
                      Already have an account? Login!
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword

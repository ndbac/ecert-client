import Image from 'next/image'
import Placeholder2 from '../../public/images/placeholder2.png'
import Placeholder3 from '../../public/images/placeholder3.png'
import PhotoWomen from '../../public/images/photo-women.png'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  AppDispatch,
  RootState,
} from '../../redux/modules/common/common.interface'
import { useDispatch, useSelector } from 'react-redux'
import {
  IVerifyAccountState,
  IVerifyPassword,
} from '../../redux/modules/verify/interface/verify.interface'
import { resetPassword } from '../../redux/modules/verify/slices/verify.slice'
import { useRouter } from 'next/router'

const formSchema = Yup.object({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message:
        'Password must contain uppercase letters and numbers or special characters',
    })
    .required('Please enter your password'),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref('password'), null],
      'Confirm password is not equal to your password'
    )
    .required('Please enter your password again'),
})

function NewPassword() {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector<RootState>(
    (state) => state.verifyReducer
  ) as IVerifyAccountState
  let message

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    onSubmit: (value) => {
      const data = {
        token: router.query.tokenId,
        data: {
          newPassword: value.password,
        },
      } as IVerifyPassword
      dispatch(resetPassword(data))
      formik.resetForm()
    },
    validationSchema: formSchema,
  })

  if (store.status == 'password updated successfully') {
    router.push('/login')
  }
  if (store.serverErr == 'Rejected') {
    message = (
      <p className="text-md text-red-400 font-semibold text-center mb-2">
        Some thing bad happen!
      </p>
    )
  }
  return (
    <section className="py-16 md:py-44 bg-black h-full relative overflow-hidden">
      <div className="hidden lg:block absolute bottom-1/2 right-0 h-64 ml-40 -mb-24 clip-path transform rotate-45">
        <div className="w-64 transform -rotate-45 object-cover">
          <Image src={Placeholder2} alt="" />
        </div>
      </div>
      {true ? (
        <div className="p-5 min-w-screen">
          <div className="p-8 text-center text-white lg:p-12 lg:w-1/3 md:w-1/2 w-full m-auto">
            <h3 className="text-4xl pb-7 font-bold">Reset Password</h3>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  className="w-full mb-3 py-4 mt-4 px-6 bg-yellow-900 rounded-full border text-white outline-none placeholder-white"
                  type="password"
                  placeholder="Enter password"
                  value={formik.values.password}
                  onChange={formik.handleChange('password')}
                  onBlur={formik.handleBlur('password')}
                />
                <p className="mb-5 text-yellow-600 font-semibold">
                  {' '}
                  {formik.touched.password && formik.errors.password}{' '}
                </p>
              </div>
              <div>
                <input
                  className="w-full mb-3 py-4 px-6 bg-yellow-900 rounded-full border text-white outline-none placeholder-white"
                  type="password"
                  placeholder="Re-type password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange('confirmPassword')}
                  onBlur={formik.handleBlur('confirmPassword')}
                />
                <p className="mb-5 text-yellow-600 font-semibold">
                  {' '}
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword}{' '}
                </p>
              </div>
              {!store.status && !store.loading && message}
              <button
                className="w-full px-4 py-2 font-semibold text-black bg-yellow-400 hover:bg-yellow-600 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center p-5 min-w-screen">
          <div className="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
            <h3 className="text-4xl pb-7 font-bold">404 Not Found</h3>
          </div>
        </div>
      )}
      <div className="hidden lg:block absolute top-0 left-1/2 h-64 clip-path-2 transform rotate-45">
        <div className="w-64 transform -rotate-45 object-cover">
          <Image src={PhotoWomen} alt="" />
        </div>
      </div>
      <div className="hidden md:block absolute top-0 left-0 -ml-64 h-128 clip-path-2 transform rotate-45">
        <div className="h-128 w-full transform -rotate-45 object-cover">
          <Image src={Placeholder3} alt="" />
        </div>
      </div>
    </section>
  )
}

export default NewPassword

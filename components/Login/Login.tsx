import Image from 'next/image'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserAction } from '../../redux/modules/auth/slices/auth.slice'
import {
  AppDispatch,
  RootState,
} from '../../redux/modules/common/common.interface'
import { AuthState } from '../../redux/modules/auth/interfaces/auth.interface'

import Placeholder1 from '../../public/images/placeholder1.png'
import Placeholder2 from '../../public/images/placeholder2.png'
import Placeholder3 from '../../public/images/placeholder3.png'
import ShadowLight7 from '../../public/elements/shadow-light-7.svg'
import PhotoWomen from '../../public/images/photo-women.png'
import Link from 'next/link'

const formSchema = Yup.object({
  email: Yup.string()
    .email('Email is not valid')
    .required('Please enter a valid email address'),
  password: Yup.string().required('Please enter your password'),
})

function Login() {
  const dispatch = useDispatch<AppDispatch>()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(loginUserAction(values))
    },
    validationSchema: formSchema,
  })
  const store = useSelector<RootState>(
    (state) => state.authReducer
  ) as AuthState
  const { userAuth, loading, serverErr } = store

  const router = useRouter()
  if (userAuth) {
    router.push(`/user/${userAuth.id}`)
  }

  return (
    <section className="relative pt-20 pb-48 bg-black overflow-hidden">
      <div className="relative z-10 md:pt-40 lg:pt-64 md:pb-40">
        <div className="hidden md:block absolute top-0 right-0 mt-40 -mr-32 h-128 clip-path-2 transform rotate-45">
          <div className="h-128 w-full transform -rotate-45 object-cover">
            <Image src={Placeholder1} alt="" />
          </div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="hidden lg:block absolute -bottom-1/2 left-0 h-64 ml-40 -mb-24 clip-path transform rotate-45">
            <div className="w-64 transform -rotate-45 object-cover">
              <Image src={Placeholder2} alt="" />
            </div>
          </div>
          <div className="relative z-10 max-w-md mx-auto text-center">
            <h2 className="mb-4 text-4xl text-white font-heading">Login</h2>
            <p className="mb-6 text-lg text-white md:text-gray-500">
              Take a big step forward in growing your business with this great
              tool.
            </p>
            <form onSubmit={formik.handleSubmit}>
              {serverErr && (
                <p className="mb-8 text-lg text-yellow-600 font-semibold text-center">
                  Email or password is wrong!
                </p>
              )}
              <p className="mb-4 ml-6 text-yellow-600 font-semibold">
                {' '}
                {formik.touched.email && formik.errors.email}{' '}
              </p>
              <input
                value={formik.values.email}
                onChange={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                className="w-full mb-4 py-4 px-6 bg-black rounded-full border text-white outline-none placeholder-white"
                type="email"
                placeholder="Type your e-mail"
              />
              <p className="mb-4 ml-6 text-yellow-600 font-semibold">
                {' '}
                {formik.touched.password && formik.errors.password}{' '}
              </p>
              <div className="flex mb-6 py-4 px-6 bg-black rounded-full border text-white font-bold">
                <input
                  value={formik.values.password}
                  onChange={formik.handleChange('password')}
                  onBlur={formik.handleBlur('password')}
                  className="w-full pr-4 bg-transparent outline-none placeholder-white"
                  type="password"
                  placeholder="Enter password"
                />
                <button type="button">
                  <svg
                    width="28"
                    height="20"
                    viewBox="0 0 28 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.292897 9.29285C-0.0976325 9.68335 -0.0976325 10.3166 0.292897 10.7071L4.7868 15.201C9.86357 20.2778 18.0948 20.2778 23.1716 15.201L27.6655 10.7071C28.056 10.3166 28.056 9.68335 27.6655 9.29285L23.1716 4.79895C18.0948 -0.277868 9.86357 -0.277878 4.7868 4.79895L0.292897 9.29285ZM6.20101 13.7868L2.41422 9.99995L6.20102 6.21315C10.4968 1.91739 17.4616 1.91739 21.7574 6.21315L25.5442 9.99995L21.7574 13.7868C17.4616 18.0826 10.4968 18.0826 6.20101 13.7868ZM10.9584 9.99995C10.9584 8.34305 12.3015 6.99995 13.9584 6.99995C15.6153 6.99995 16.9584 8.34305 16.9584 9.99995C16.9584 11.6569 15.6153 13 13.9584 13C12.3015 13 10.9584 11.6569 10.9584 9.99995ZM13.9584 4.99995C11.197 4.99995 8.95837 7.23855 8.95837 9.99995C8.95837 12.7614 11.197 15 13.9584 15C16.7198 15 18.9584 12.7614 18.9584 9.99995C18.9584 7.23855 16.7198 4.99995 13.9584 4.99995Z"
                      fill="#FFEC3E"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="mb-4">
                <Link href="/reset-password">
                  <a className="text-yellow-500  hover:underline">
                    Forgot Password?
                  </a>
                </Link>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
              >
                {!loading && (
                  <svg
                    className="mr-3"
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z"
                      fill="black"
                    ></path>
                  </svg>
                )}
                <span className="text-sm font-medium font-heading">
                  {loading ? 'Loading' : 'Login'}
                </span>
              </button>
            </form>
          </div>
          <div className="hidden sm:block absolute top-1/2 right-0 -mr-52 transform -translate-y-1/2 object-contain">
            <Image src={ShadowLight7} alt="" />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 -ml-64 h-128 clip-path-2 transform rotate-45">
        <div className="h-128 w-full transform -rotate-45 object-cover">
          <Image src={Placeholder3} alt="" />
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 left-1/2 h-64 clip-path-2 transform rotate-45">
        <div className="w-64 transform -rotate-45 object-cover">
          <Image src={PhotoWomen} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Login

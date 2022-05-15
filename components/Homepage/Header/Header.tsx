import Image from 'next/image'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { userSendEmail } from '../../../redux/modules/notification/slices/notification.slice'
import {
  AppDispatch,
  RootState,
} from '../../../redux/modules/common/common.interface'
import {
  NotificationState,
  EEmailOption,
  EEmailType,
} from '../../../redux/modules/notification/interfaces/notification.interface'

import {
  DEFAULT_EMAIL_ADDRESS,
  SUBSCRIBE_EMAIL_SUBJECT,
} from '../../../utils/defaultValues'

import ShadowBlueFull from '../../../public/elements/shadow-blue-full.svg'
import ShadowLight7 from '../../../public/elements/shadow-light-7.svg'
import PhotoWomen2 from '../../../public/images/photo-women2.png'
import Logo from '../../../public/logo/logo-boldui-light.svg'

const formSchema = Yup.object({
  from: Yup.string().email('Email is not valid'),
})

function Header() {
  const dispatch = useDispatch<AppDispatch>()
  const formik = useFormik({
    initialValues: {
      from: '',
      to: DEFAULT_EMAIL_ADDRESS,
      subject: SUBSCRIBE_EMAIL_SUBJECT,
      text: '',
      option: EEmailOption.TEXT,
      type: EEmailType.NOTIFICATION,
    },
    onSubmit: (values) => {
      values.text = `Subscriber email: ${values.from}`
      dispatch(userSendEmail(values))
      formik.resetForm()
    },
    validationSchema: formSchema,
  })

  const store = useSelector<RootState>(
    (state) => state.notiReducer
  ) as NotificationState
  const { loading } = store

  return (
    <section className="relative bg-black overflow-hidden">
      <div className="relative pt-48 w-2/3 ml-auto">
        <div className="absolute top-0 left-0 -ml-64 rounded-full h-20 md:h-160 w-80 md:w-160">
          <Image
            className="object-contain transform scale-200"
            src={ShadowBlueFull}
            alt=""
          />
        </div>
        <div className="absolute top-1/2 left-0 mt-40 rounded-full h-20 md:h-160 w-80 md:w-160">
          <Image
            className="object-contain transform scale-200"
            src={ShadowLight7}
            alt=""
          />
        </div>
        <div className="absolute hidden md:block top-30 left-0 -mt-40 ml-40 transform -translate-x-1/2 rotate-45 clip-path">
          <Image
            className="h-full transform -rotate-45 object-cover"
            src={PhotoWomen2}
            alt=""
          />
        </div>
      </div>
      <div className="relative container mx-auto px-4 pb-24 lg:pb-64">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <h2 className="md:max-w-md mx-auto text-2xl sm:text-4xl md:text-6xl text-white uppercase font-heading">
              Take care of your performance every day
            </h2>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="md:max-w-md mx-auto">
              <p className="mb-20 max-w-sm sm:text-xl font-semibold text-white">
                Take care to develop resources continually and integrity them
                with previous projects.
              </p>
              <form
                onSubmit={formik.handleSubmit}
                className="flex px-8 py-4 bg-black rounded-full border border-white"
              >
                <input
                  value={formik.values.from}
                  onChange={formik.handleChange('from')}
                  onBlur={formik.handleBlur('from')}
                  className="w-full pr-4 bg-transparent text-white placeholder-white outline-none"
                  type="email"
                  placeholder="Type your e-mail"
                />
                <button
                  type="submit"
                  className="flex items-center text-yellow-300 hover:text-yellow-400"
                >
                  <span className="mr-2">{loading ? 'Sending' : 'Go'}</span>
                  <svg
                    className="mt-1"
                    width="16"
                    height="8"
                    viewBox="0 0 16 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.01 3H0V5H12.01V8L16 4L12.01 0V3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="relative flex flex-col py-8 px-10 w-full h-full bg-black border-r overflow-y-auto">
          <a
            className="inline-block text-xl text-white font-medium font-heading mb-16 md:mb-32"
            href="#"
          >
            <Image className="h-8" src={Logo} alt="" />
          </a>
          <ul className="mb-32">
            <li className="mb-10">
              <a className="flex items-center" href="#">
                <span className="mr-3 text-lg text-white">About</span>
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="mb-10">
              <a className="flex items-center" href="#">
                <span className="mr-3 text-lg text-white">Company</span>
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="mb-10">
              <a className="flex items-center" href="#">
                <span className="mr-3 text-lg text-white">Services</span>
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a className="flex items-center" href="#">
                <span className="mr-3 text-lg text-white">Contact</span>
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
          <a
            className="flex mb-8 items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
            href="#"
          >
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
            <span className="text-sm font-medium uppercase tracking-wider">
              Sign Up
            </span>
          </a>
          <a
            className="flex mb-10 items-center text-white hover:underline"
            href="#"
          >
            <span className="mr-2 text-sm">Log In</span>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.01 3.95383H0V6.04614H12.01V9.1846L16 4.99998L12.01 0.815369V3.95383Z"
                fill="#FFEC3E"
              ></path>
            </svg>
          </a>
          <p className="text-sm text-gray-500">
            All rights reserved © BoldUI 2021
          </p>
        </nav>
      </div>
    </section>
  )
}

export default Header

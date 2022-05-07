import { useState } from 'react';
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import {
  AppDispatch,
  RootState,
} from "../../redux/modules/common/common.interface";
import { registerUserAction } from "../../redux/modules/auth/slices/auth.slice";
import { IamNamespace } from "../../redux/modules/common/common.interface";
import { AuthState } from "../../redux/modules/auth/interfaces/auth.interface";

import ShadowBlueFull from "../../public/elements/shadow-blue-full.svg";
import Ellipse from "../../public/elements/ellipse.svg";

const formSchema = Yup.object({
  name: Yup.string()
    .max(30, "Your last name must be lower than 30 characters")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Your email is not valid")
    .required("Please enter your email address"),
  password: Yup.string()
    .min(
      8,
      "Password must be at least 8 characters"
    )
    .matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message:
        'Password must contain uppercase letters and numbers or special characters',
    })
    .required("Please enter your password"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Confirm password is not equal to your password"
    )
    .required("Please enter your password again"),
});

function Register() {
  const [accountType, setAccountType] = useState(IamNamespace.USER);
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      namespace: accountType,
    },
    onSubmit: (values) => {
      values.namespace = accountType;
      dispatch(registerUserAction(values));
    },
    validationSchema: formSchema,
  });

  const storeData = useSelector<RootState>(
    (store) => store.authReducer
  ) as AuthState;
  const { loading, serverErr, registered } = storeData;

  const router = useRouter();
  if (registered) {
    router.push(`/login`);
  }

  return (
    <section className="bg-black">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full lg:w-1/2 px-4 border-b lg:border-b-0">
          <div className="absolute top-0 left-0 -ml-40">
            <Image src={ShadowBlueFull} alt="" />
          </div>
          <ul className="pt-32">
            <li className="mb-20">
              <div className="relative">
                <div className="absolute h-52 w-52 top-0 left-0 -mt-24">
                  <Image src={Ellipse} alt="" />
                </div>
              </div>
              <div className="flex ml-20">
                <span className="inline-block mr-6">
                  <svg
                    width="28"
                    height="22"
                    viewBox="0 0 28 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M26.2726 1.62348C25.1609 0.641537 23.4509 0.733345 22.4564 1.83105L10.1793 15.3827L4.79461 9.99394C3.7476 8.94414 2.03761 8.93217 0.974424 9.96999C-0.084719 11.0038 -0.100889 12.6963 0.950169 13.7421L8.35608 21.1506C8.86544 21.6575 9.55672 21.9449 10.2803 21.9449C10.3005 21.9449 10.3248 21.9449 10.345 21.9449C11.0888 21.9289 11.7963 21.6056 12.2935 21.0548L26.4868 5.39158C27.4773 4.29388 27.3843 2.60542 26.2726 1.62348Z"
                      fill="#FFEC3E"
                    ></path>
                  </svg>
                </span>
                <div>
                  <h3 className="mb-4 text-xl text-white font-heading">
                    Quick problem-solving contact
                  </h3>
                  <p className="text-lg text-gray-500">
                    Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                    tellus sit amet tempus vestibulum.
                  </p>
                </div>
              </div>
            </li>
            <li className="mb-20">
              <div className="relative">
                <div className="absolute h-52 w-52 top-0 left-0 -mt-24">
                  <Image src={Ellipse} alt="" />
                </div>
              </div>
              <div className="flex ml-20">
                <span className="inline-block mr-6">
                  <svg
                    width="28"
                    height="22"
                    viewBox="0 0 28 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M26.2726 1.62348C25.1609 0.641537 23.4509 0.733345 22.4564 1.83105L10.1793 15.3827L4.79461 9.99394C3.7476 8.94414 2.03761 8.93217 0.974424 9.96999C-0.084719 11.0038 -0.100889 12.6963 0.950169 13.7421L8.35608 21.1506C8.86544 21.6575 9.55672 21.9449 10.2803 21.9449C10.3005 21.9449 10.3248 21.9449 10.345 21.9449C11.0888 21.9289 11.7963 21.6056 12.2935 21.0548L26.4868 5.39158C27.4773 4.29388 27.3843 2.60542 26.2726 1.62348Z"
                      fill="#FFEC3E"
                    ></path>
                  </svg>
                </span>
                <div>
                  <h3 className="mb-4 text-xl text-white font-heading">
                    Making changes simple and easy
                  </h3>
                  <p className="text-lg text-gray-500">
                    Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                    tellus sit amet tempus vestibulum.
                  </p>
                </div>
              </div>
            </li>
            <li className="mb-20">
              <div className="relative">
                <div className="absolute h-52 w-52 top-0 left-0 -mt-24">
                  <Image src={Ellipse} alt="" />
                </div>
              </div>
              <div className="flex ml-20">
                <span className="inline-block mr-6">
                  <svg
                    width="28"
                    height="22"
                    viewBox="0 0 28 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M26.2726 1.62348C25.1609 0.641537 23.4509 0.733345 22.4564 1.83105L10.1793 15.3827L4.79461 9.99394C3.7476 8.94414 2.03761 8.93217 0.974424 9.96999C-0.084719 11.0038 -0.100889 12.6963 0.950169 13.7421L8.35608 21.1506C8.86544 21.6575 9.55672 21.9449 10.2803 21.9449C10.3005 21.9449 10.3248 21.9449 10.345 21.9449C11.0888 21.9289 11.7963 21.6056 12.2935 21.0548L26.4868 5.39158C27.4773 4.29388 27.3843 2.60542 26.2726 1.62348Z"
                      fill="#FFEC3E"
                    ></path>
                  </svg>
                </span>
                <div>
                  <h3 className="mb-4 text-xl text-white font-heading">
                    Exchangeable at any time
                  </h3>
                  <p className="text-lg text-gray-500">
                    Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                    tellus sit amet tempus vestibulum.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 px-4 lg:border-l">
          <div className="max-w-md mx-auto pt-12 pb-20 lg:py-32">
            <h2 className="mb-4 text-4xl text-center text-white font-heading">
              Create account
            </h2>
            <p className="mb-8 text-lg text-gray-500">
              Take a big step forward in growing your business with this great
              tool.
            </p>
            <form onSubmit={formik.handleSubmit}>
              {serverErr &&
                <p className="mb-8 text-lg text-yellow-600 font-semibold text-center">
                  Account already exists!
                </p>
              }
              <p className="mb-3 font-semibold text-lg text-white ml-3">
                Choose account type:
              </p>
              <div className="flex mb-5">
                <button type="button" onClick={() => setAccountType(IamNamespace.USER)} className={accountType !== IamNamespace.USER ? "text-sm font-medium font-heading mr-2 inline-flex w-full items-center justify-center py-4 px-6 rounded-full bg-yellow-600" : "text-sm font-medium font-heading mr-2 inline-flex w-full items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"}>
                  User
                </button>
                <button type="button" onClick={() => setAccountType(IamNamespace.PROJECT)} className={accountType !== IamNamespace.PROJECT ? "text-sm font-medium font-heading ml-2 inline-flex w-full items-center justify-center py-4 px-6 rounded-full bg-yellow-600" : "text-sm font-medium font-heading ml-2 inline-flex w-full items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"}>
                  Organization
                </button>
              </div>
              <p className="mb-2 ml-6 text-yellow-600 font-semibold"> {formik.touched.email && formik.errors.email} </p>
              <input
                className="w-full mb-4 py-4 px-6 bg-yellow-900 rounded-full border text-white outline-none placeholder-white"
                type="email"
                placeholder="Type your e-mail"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
              />
              <p className="mb-2 ml-6 text-yellow-600 font-semibold"> {formik.touched.name && formik.errors.name} </p>
              <input
                className="w-full mb-4 py-4 px-6 bg-yellow-900 rounded-full border text-white outline-none placeholder-white"
                type="text"
                placeholder={accountType === IamNamespace.USER ? "Type your name" : "Type your organization"}
                value={formik.values.name}
                onChange={formik.handleChange("name")}
                onBlur={formik.handleBlur("name")}
              />
              <p className="mb-2 ml-6 text-yellow-600 font-semibold"> {formik.touched.password && formik.errors.password} </p>
              <input
                className="w-full mb-6 py-4 px-6 bg-yellow-900 rounded-full border text-white outline-none placeholder-white"
                type="password"
                placeholder="Enter password"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
              />
              <p className="mb-2 ml-6 text-yellow-600 font-semibold"> {formik.touched.confirmPassword && formik.errors.confirmPassword} </p>
              <input
                className="w-full mb-6 py-4 px-6 bg-yellow-900 rounded-full border text-white outline-none placeholder-white"
                type="password"
                placeholder="Re-type password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange("confirmPassword")}
                onBlur={formik.handleBlur("confirmPassword")}
              />
              <label className="block mb-6 text-center" htmlFor="">
                <span className="text-sm text-white">
                  <span> By signing up, you agree to our </span>
                  <a className="text-blue-200 hover:underline" href="#">
                    Terms, Data Policy and Cookies Policy.
                  </a>
                </span>
              </label>
              <button
                className={
                  loading
                    ? "inline-flex w-full items-center justify-center py-4 px-6 rounded-full bg-yellow-500"
                    : "inline-flex w-full items-center justify-center py-4 px-6 rounded-full bg-yellow-200 hover:bg-yellow-400 transform duration-200"
                }
                type="submit"
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
                {loading ? (
                  <span className="text-sm font-medium font-heading">
                    Loading
                  </span>
                ) : (
                  <span className="text-sm font-medium font-heading">
                    Sign Up
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;

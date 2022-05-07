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
import { registerUserAction } from "../../redux/modules/authModule/slices/authSlices";
import { IamNamespace } from "../../redux/modules/common/common.interface";
import { AuthState } from "../../redux/modules/authModule/interfaces/auth.interface";

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
                placeholder="Type your name/organization"
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

// import Image from "next/image";
// import { useDispatch, useSelector } from "react-redux";
// import * as Yup from "yup";
// import { useRouter } from "next/router";
// import { useFormik } from "formik";
// import {
//   AppDispatch,
//   RootState,
// } from "../../redux/modules/common/common.interface";
// import { registerUserAction } from "../../redux/modules/authModule/slices/authSlices";
// import { IamNamespace } from "../../redux/modules/common/common.interface";
// import { AuthState } from "../../redux/modules/authModule/interfaces/auth.interface";

// const formSchema = Yup.object({
//   name: Yup.string()
//     .max(15, "Your last name must be lower than 30 characters")
//     .required("Please enter your name"),
//   email: Yup.string()
//     .email("Your email is not valid")
//     .required("Please enter your email address"),
//   password: Yup.string()
//     .min(
//       8,
//       "Password must be at least 8 characters with at least one uppercase letter and a number"
//     )
//     .required("Please enter your password"),
//   confirmPassword: Yup.string()
//     .oneOf(
//       [Yup.ref("password"), null],
//       "Confirm password is not equal to your password"
//     )
//     .required("Please enter your password again"),
// });

// function Register() {
//   const dispatch = useDispatch<AppDispatch>();
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       namespace: IamNamespace.USER,
//     },
//     onSubmit: (values) => {
//       dispatch(registerUserAction(values));
//     },
//     validationSchema: formSchema,
//   });

//   const storeData = useSelector<RootState>(
//     (store) => store.authReducer
//   ) as AuthState;
//   const { loading, serverErr, registered } = storeData;

//   const router = useRouter();
//   if (registered) {
//     router.push(`/login`);
//   }

//   return (
//     <section className="relative py-20">
//       <div className="hidden lg:block absolute top-0 left-0 mt-16 z-10">
//         <Image
//           src="/icons/dots/blue-dot-left-bars.svg"
//           alt=""
//           width="250%"
//           height="250%"
//           objectFit="contain"
//         />
//       </div>
//       <div className="hidden lg:block absolute bottom-0 right-0 mb-16">
//         <Image
//           src="/icons/dots/yellow-dot-right-shield.svg"
//           alt=""
//           width="100%"
//           height="100%"
//           objectFit="contain"
//         />
//       </div>

//       <div className="absolute top-0 left-0 lg:bottom-0 h-128 lg:h-auto w-full lg:w-8/12 bg-gray-50"></div>
//       <div className="relative container px-4 mx-auto">
//         <div className="flex flex-wrap items-center -mx-4">
//           <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
//             <div className="pl-14 max-w-lg">
//               <h2 className="mb-10 text-4xl font-semibold font-heading">
//                 Lorem ipsum dolor sit amet consectutar domor at elis
//               </h2>
//               <p className="text-xl text-gray-500">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
//                 aliquet orci.
//               </p>
//             </div>
//           </div>
//           <div className="w-full lg:w-1/2 px-4">
//             <div className="lg:max-w-md p-6 lg:px-10 lg:py-12 bg-white text-center border rounded-xl">
//               <form onSubmit={formik.handleSubmit}>
//                 <span className="inline-block mb-4 text-xs text-blue-400 font-semibold">
//                   Sign Up
//                 </span>
//                 <h3 className="mb-12 text-3xl font-semibold font-heading">
//                   Create new account
//                 </h3>
//                 {serverErr && (
//                   <span className="inline-block mb-8 text-xs text-red-400 font-semibold">
//                     Account already exists. Please create a new account
//                   </span>
//                 )}
//                 <div className="text-left mb-2">
//                   <div className="relative border rounded">
//                     <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
//                       Account type
//                     </span>
//                     <select
//                       className="appearance-none w-full p-3 text-sm leading-none rounded outline-none my-1.5 px-4"
//                       name="field-name"
//                       value={formik.values.namespace}
//                       onChange={formik.handleChange("namespace")}
//                       onBlur={formik.handleBlur("namespace")}
//                     >
//                       <option className="text-md" value={IamNamespace.PROJECT}>
//                         Organization
//                       </option>
//                       <option className="text-md" value={IamNamespace.USER}>
//                         User
//                       </option>
//                     </select>
//                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                       <svg
//                         className="fill-current h-4 w-4"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//                 <span className="inline-block mb-4 text-xs text-red-400 font-semibold">
//                   {formik.touched.email && formik.errors.email}
//                 </span>
//                 <div className="relative flex flex-wrap mb-2">
//                   <input
//                     value={formik.values.email}
//                     onChange={formik.handleChange("email")}
//                     onBlur={formik.handleBlur("email")}
//                     className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
//                     type="email"
//                     placeholder="e.g hello@shuffle.dev"
//                   />
//                   <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
//                     Your email address
//                   </span>
//                 </div>
//                 <span className="inline-block mb-4 text-xs text-red-400 font-semibold">
//                   {formik.touched.name && formik.errors.name}
//                 </span>
//                 <div className="relative flex flex-wrap mb-2">
//                   <input
//                     value={formik.values.name}
//                     onChange={formik.handleChange("name")}
//                     onBlur={formik.handleBlur("name")}
//                     className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
//                     type="text"
//                     placeholder="e.g eCert Project"
//                   />
//                   <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
//                     Name / Organization
//                   </span>
//                 </div>
//                 <span className="inline-block mb-4 text-xs text-red-400 font-semibold">
//                   {formik.touched.password && formik.errors.password}
//                 </span>
//                 <div className="relative flex flex-wrap mb-2">
//                   <input
//                     value={formik.values.password}
//                     onChange={formik.handleChange("password")}
//                     onBlur={formik.handleBlur("password")}
//                     className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
//                     type="password"
//                     placeholder="******"
//                   />
//                   <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
//                     Password
//                   </span>
//                 </div>
//                 <span className="inline-block mb-4 text-xs text-red-400 font-semibold">
//                   {formik.touched.confirmPassword &&
//                     formik.errors.confirmPassword}
//                 </span>
//                 <div className="relative flex flex-wrap mb-6">
//                   <input
//                     value={formik.values.confirmPassword}
//                     onChange={formik.handleChange("confirmPassword")}
//                     onBlur={formik.handleBlur("confirmPassword")}
//                     className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
//                     type="password"
//                     placeholder="******"
//                   />
//                   <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
//                     Repeat password
//                   </span>
//                 </div>
//                 <label className="inline-flex mb-10 text-left">
//                   <input
//                     className="mr-2"
//                     type="checkbox"
//                     name="terms"
//                     value="1"
//                   />
//                   <span className="-mt-1 inline-block text-sm text-gray-500">
//                     By signing up, you agree to our
//                     <a className="text-red-400 hover:underline" href="#">
//                       Terms, Data Policy
//                     </a>
//                     and
//                     <a className="text-red-400 hover:underline" href="#">
//                       Cookies Policy
//                     </a>
//                     .
//                   </span>
//                 </label>
//                 {loading ? (
//                   <button className="w-full inline-block py-4 text-sm text-white font-medium leading-normal bg-red-300 rounded transition duration-200">
//                     Loading...
//                   </button>
//                 ) : (
//                   <button className="w-full inline-block py-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200">
//                     Get Started
//                   </button>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Register;

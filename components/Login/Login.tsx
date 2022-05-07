import Image from 'next/image';
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../redux/modules/auth/slices/auth.slice";
import { AppDispatch, RootState } from "../../redux/modules/common/common.interface";
import { AuthState } from "../../redux/modules/auth/interfaces/auth.interface";

import Placeholder1 from "../../public/images/placeholder1.png";
import Placeholder2 from "../../public/images/placeholder2.png";
import Placeholder3 from "../../public/images/placeholder3.png";
import ShadowLight7 from "../../public/elements/shadow-light-7.svg";
import PhotoWomen from "../../public/images/photo-women.png";

const formSchema = Yup.object({
  email: Yup.string()
    .email("Email is not valid")
    .required("Please enter a valid email address"),
  password: Yup.string().required("Please enter your password"),
});

function Login() {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(loginUserAction(values));
    },
    validationSchema: formSchema,
  });
  const store = useSelector<RootState>(
    (state) => state.authReducer
  ) as AuthState;
  const { userAuth, loading, serverErr } = store;

  const router = useRouter();
  if (userAuth) {
    router.push(`/user/${userAuth.id}`);
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
            <p className="mb-6 text-lg text-white md:text-gray-500">Take a big step forward in growing your business with this great tool.</p>
            <form onSubmit={formik.handleSubmit}>
              {serverErr &&
                <p className="mb-8 text-lg text-yellow-600 font-semibold text-center">
                  Email or password is wrong!
                </p>
              }
              <p className="mb-4 ml-6 text-yellow-600 font-semibold"> {formik.touched.email && formik.errors.email} </p>
              <input
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                className="w-full mb-4 py-4 px-6 bg-black rounded-full border text-white outline-none placeholder-white" type="email" placeholder="Type your e-mail" />
              <p className="mb-4 ml-6 text-yellow-600 font-semibold"> {formik.touched.password && formik.errors.password} </p>
              <div className="flex mb-6 py-4 px-6 bg-black rounded-full border text-white font-bold">
                <input
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  className="w-full pr-4 bg-transparent outline-none placeholder-white" type="password" placeholder="Enter password" />
                <button type="button">
                  <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.292897 9.29285C-0.0976325 9.68335 -0.0976325 10.3166 0.292897 10.7071L4.7868 15.201C9.86357 20.2778 18.0948 20.2778 23.1716 15.201L27.6655 10.7071C28.056 10.3166 28.056 9.68335 27.6655 9.29285L23.1716 4.79895C18.0948 -0.277868 9.86357 -0.277878 4.7868 4.79895L0.292897 9.29285ZM6.20101 13.7868L2.41422 9.99995L6.20102 6.21315C10.4968 1.91739 17.4616 1.91739 21.7574 6.21315L25.5442 9.99995L21.7574 13.7868C17.4616 18.0826 10.4968 18.0826 6.20101 13.7868ZM10.9584 9.99995C10.9584 8.34305 12.3015 6.99995 13.9584 6.99995C15.6153 6.99995 16.9584 8.34305 16.9584 9.99995C16.9584 11.6569 15.6153 13 13.9584 13C12.3015 13 10.9584 11.6569 10.9584 9.99995ZM13.9584 4.99995C11.197 4.99995 8.95837 7.23855 8.95837 9.99995C8.95837 12.7614 11.197 15 13.9584 15C16.7198 15 18.9584 12.7614 18.9584 9.99995C18.9584 7.23855 16.7198 4.99995 13.9584 4.99995Z" fill="#FFEC3E"></path>
                  </svg>
                </button>
              </div>

              <button type="submit" className="inline-flex w-full items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200">
                {!loading && <svg className="mr-3" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z" fill="black"></path>
                </svg>}
                <span className="text-sm font-medium font-heading">{loading ? 'Loading' : 'Login'}</span>
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
  );
}

export default Login;


// import { useRouter } from "next/router";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUserAction } from "../../redux/modules/authModule/slices/authSlices";
// import { AppDispatch, RootState } from "../../redux/modules/common/common.interface";
// import { AuthState } from "../../redux/modules/authModule/interfaces/auth.interface";

// const formSchema = Yup.object({
//   email: Yup.string()
//     .email("Email is not valid")
//     .required("Please enter a valid email address"),
//   password: Yup.string().required("Please enter your password"),
// });

// function Login() {
//   const dispatch = useDispatch<AppDispatch>();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit: (values) => {
//       dispatch(loginUserAction(values));
//     },
//     validationSchema: formSchema,
//   });
//   const store = useSelector<RootState>(
//     (state) => state.authReducer
//   ) as AuthState;
//   const { userAuth, loading, serverErr } = store;

//   const router = useRouter();
//   if (userAuth) {
//     router.push(`/user/${userAuth.id}`);
//   }

//   return (
//     <section className="relative py-20 bg-gray-50">
//       <div className="absolute top-0 left-0 lg:bottom-0 h-128 lg:h-auto w-full lg:w-8/12 bg-white"></div>
//       <div className="relative container px-4 mx-auto">
//         <div className="flex flex-wrap items-center -mx-4">
//           <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
//             <div className="max-w-lg">
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
//                   Sign In
//                 </span>
//                 <h3 className="mb-12 text-3xl font-semibold font-heading">
//                   Join our community
//                 </h3>
//                 {serverErr && (
//                   <span className="inline-block mb-8 text-xs text-red-400 font-semibold">
//                     Email or password is not correct
//                   </span>
//                 )}
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
//                 {formik.touched.password && formik.errors.password}
//                 </span>
//                 <div className="relative flex flex-wrap mb-6">
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
//                 {loading ? (
//                   <button className="w-full inline-block py-4 mb-4 text-sm text-white font-medium leading-normal bg-red-300 rounded transition duration-200">
//                     Loading...
//                   </button>
//                 ) : (
//                   <button className="w-full inline-block py-4 mb-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200">
//                     Get Started
//                   </button>
//                 )}

//                 <a
//                   className="block pb-6 mb-6 text-sm font-semibold hover:underline border-b"
//                   href="#"
//                 >
//                   Forgot password?
//                 </a>
//                 <a
//                   className="flex items-center justify-center mb-4 py-4 bg-blue-800 hover:bg-blue-900 rounded"
//                   href="#"
//                 >
//                   <span className="inline-block mr-2">
//                     <svg
//                       width="7"
//                       height="12"
//                       viewBox="0 0 7 12"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M4.0898 11.8182V6.51074H5.90537L6.17776 4.4417H4.0898V3.12092C4.0898 2.52207 4.25864 2.11397 5.13515 2.11397L6.25125 2.11352V0.262891C6.05824 0.238289 5.39569 0.181885 4.62456 0.181885C3.01431 0.181885 1.9119 1.14594 1.9119 2.91601V4.4417H0.0908203V6.51074H1.9119V11.8182H4.0898Z"
//                         fill="white"
//                       ></path>
//                     </svg>
//                   </span>
//                   <span className="text-sm text-white">
//                     Sign in with Facebook
//                   </span>
//                 </a>
//                 <a
//                   className="flex items-center justify-center py-4 bg-blue-400 hover:bg-blue-500 rounded"
//                   href="#"
//                 >
//                   <span className="inline-block mr-2">
//                     <svg
//                       width="13"
//                       height="11"
//                       viewBox="0 0 13 11"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M12.5455 2.0974C12.0904 2.29904 11.6022 2.43579 11.0892 2.49684C11.613 2.18316 12.014 1.68562 12.204 1.09459C11.7127 1.38508 11.1703 1.59601 10.5924 1.71035C10.1296 1.21667 9.47138 0.90918 8.74128 0.90918C7.34059 0.90918 6.20489 2.04488 6.20489 3.4448C6.20489 3.64334 6.2273 3.83726 6.27057 4.0227C4.16298 3.91684 2.29411 2.90708 1.0433 1.37272C0.824652 1.74665 0.700269 2.18237 0.700269 2.64748C0.700269 3.52746 1.14837 4.30391 1.82825 4.75817C1.41259 4.74427 1.02166 4.62993 0.67942 4.43987V4.47154C0.67942 5.69995 1.55399 6.72516 2.71362 6.95849C2.50116 7.01567 2.27712 7.04734 2.04534 7.04734C1.88156 7.04734 1.72318 7.03112 1.56788 7.00021C1.89081 8.00843 2.8272 8.74161 3.93663 8.76171C3.06902 9.44159 1.97504 9.84565 0.786814 9.84565C0.582087 9.84565 0.38043 9.83328 0.181885 9.81088C1.30445 10.5317 2.63716 10.952 4.06952 10.952C8.73514 10.952 11.2854 7.08752 11.2854 3.73607L11.2769 3.40773C11.7752 3.05231 12.2063 2.60577 12.5455 2.0974Z"
//                         fill="white"
//                       ></path>
//                     </svg>
//                   </span>
//                   <span className="text-sm text-white">
//                     Sign in with Twitter
//                   </span>
//                 </a>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;

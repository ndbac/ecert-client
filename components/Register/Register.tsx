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

const formSchema = Yup.object({
  name: Yup.string()
    .max(15, "Your last name must be lower than 30 characters")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Your email is not valid")
    .required("Please enter your email address"),
  password: Yup.string()
    .min(
      8,
      "Password must be at least 8 characters with at least one uppercase letter and a number"
    )
    .required("Please enter your password"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Confirm password is not equal to your password"
    )
    .required("Please enter your password again"),
});

function Register() {
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      namespace: IamNamespace.USER,
    },
    onSubmit: (values) => {
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
    <section className="relative py-20">
      <div className="hidden lg:block absolute top-0 left-0 mt-16 z-10">
        <Image
          src="/icons/dots/blue-dot-left-bars.svg"
          alt=""
          width="250%"
          height="250%"
          objectFit="contain"
        />
      </div>
      <div className="hidden lg:block absolute bottom-0 right-0 mb-16">
        <Image
          src="/icons/dots/yellow-dot-right-shield.svg"
          alt=""
          width="100%"
          height="100%"
          objectFit="contain"
        />
      </div>

      <div className="absolute top-0 left-0 lg:bottom-0 h-128 lg:h-auto w-full lg:w-8/12 bg-gray-50"></div>
      <div className="relative container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="pl-14 max-w-lg">
              <h2 className="mb-10 text-4xl font-semibold font-heading">
                Lorem ipsum dolor sit amet consectutar domor at elis
              </h2>
              <p className="text-xl text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                aliquet orci.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="lg:max-w-md p-6 lg:px-10 lg:py-12 bg-white text-center border rounded-xl">
              <form onSubmit={formik.handleSubmit}>
                <span className="inline-block mb-4 text-xs text-blue-400 font-semibold">
                  Sign Up
                </span>
                <h3 className="mb-12 text-3xl font-semibold font-heading">
                  Create new account
                </h3>
                {serverErr && (
                  <span className="inline-block mb-8 text-xs text-red-400 font-semibold">
                    Account already exists. Please create a new account
                  </span>
                )}
                <div className="text-left mb-2">
                  <div className="relative border rounded">
                    <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                      Account type
                    </span>
                    <select
                      className="appearance-none w-full p-3 text-sm leading-none rounded outline-none my-1.5 px-4"
                      name="field-name"
                      value={formik.values.namespace}
                      onChange={formik.handleChange("namespace")}
                      onBlur={formik.handleBlur("namespace")}
                    >
                      <option className="text-md" value={IamNamespace.PROJECT}>
                        Organization
                      </option>
                      <option className="text-md" value={IamNamespace.USER}>
                        User
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <span className="inline-block mb-4 text-xs text-red-400 font-semibold">
                  {formik.touched.email && formik.errors.email}
                </span>
                <div className="relative flex flex-wrap mb-2">
                  <input
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                    type="email"
                    placeholder="e.g hello@shuffle.dev"
                  />
                  <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                    Your email address
                  </span>
                </div>
                <span className="inline-block mb-4 text-xs text-red-400 font-semibold">
                  {formik.touched.name && formik.errors.name}
                </span>
                <div className="relative flex flex-wrap mb-2">
                  <input
                    value={formik.values.name}
                    onChange={formik.handleChange("name")}
                    onBlur={formik.handleBlur("name")}
                    className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                    type="text"
                    placeholder="e.g eCert Project"
                  />
                  <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                    Name / Organization
                  </span>
                </div>
                <span className="inline-block mb-4 text-xs text-red-400 font-semibold">
                  {formik.touched.password && formik.errors.password}
                </span>
                <div className="relative flex flex-wrap mb-2">
                  <input
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                    className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                    type="password"
                    placeholder="******"
                  />
                  <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                    Password
                  </span>
                </div>
                <span className="inline-block mb-4 text-xs text-red-400 font-semibold">
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword}
                </span>
                <div className="relative flex flex-wrap mb-6">
                  <input
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange("confirmPassword")}
                    onBlur={formik.handleBlur("confirmPassword")}
                    className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                    type="password"
                    placeholder="******"
                  />
                  <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                    Repeat password
                  </span>
                </div>
                <label className="inline-flex mb-10 text-left">
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="terms"
                    value="1"
                  />
                  <span className="-mt-1 inline-block text-sm text-gray-500">
                    By signing up, you agree to our
                    <a className="text-red-400 hover:underline" href="#">
                      Terms, Data Policy
                    </a>
                    and
                    <a className="text-red-400 hover:underline" href="#">
                      Cookies Policy
                    </a>
                    .
                  </span>
                </label>
                {loading ? (
                  <button className="w-full inline-block py-4 text-sm text-white font-medium leading-normal bg-red-300 rounded transition duration-200">
                    Loading...
                  </button>
                ) : (
                  <button className="w-full inline-block py-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200">
                    Get Started
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;

import Image from "next/image";

function Register() {
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
              <form action="#">
                <span className="inline-block mb-4 text-xs text-blue-400 font-semibold">
                  Sign Up
                </span>
                <h3 className="mb-12 text-3xl font-semibold font-heading">
                  Create new account
                </h3>
                <div className="relative flex flex-wrap mb-6">
                  <input
                    className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                    type="email"
                    placeholder="e.g hello@shuffle.dev"
                  />
                  <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                    Your email address
                  </span>
                </div>
                <div className="relative flex flex-wrap mb-6">
                  <input
                    className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                    type="email"
                    placeholder="e.g Herry"
                  />
                  <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                    First name
                  </span>
                </div>
                <div className="relative flex flex-wrap mb-6">
                  <input
                    className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                    type="email"
                    placeholder="e.g Patrick"
                  />
                  <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                    Last name
                  </span>
                </div>
                <div className="relative flex flex-wrap mb-6">
                  <input
                    className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                    type="password"
                    placeholder="******"
                  />
                  <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                    Password
                  </span>
                </div>
                <div className="relative flex flex-wrap mb-6">
                  <input
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
                    By signing up, you agree to our{" "}
                    <a className="text-red-400 hover:underline" href="#">
                      Terms, Data Policy
                    </a>{" "}
                    and{" "}
                    <a className="text-red-400 hover:underline" href="#">
                      Cookies Policy
                    </a>
                    .
                  </span>
                </label>
                <button className="w-full inline-block py-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;

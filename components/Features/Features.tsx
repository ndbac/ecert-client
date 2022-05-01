/* eslint-disable @next/next/no-img-element */
import Image from "next/Image";

function Features() {
  return (
    <section className="relative py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-start -mx-4">
          <div className="relative w-full md:w-1/2 px-4 md:mx-0 mx-5 mb-12 md:mb-0">
            <div className="hidden lg:block absolute bottom-0 left-0 -mb-24 -ml-28 z-20">
              <Image
                src="/icons/dots/blue-dot-left-bars.svg"
                alt=""
                width="200%"
                height="200%"
                objectFit="contain"
              />
            </div>
            <div className="h-96 lg:h-128 mt-20 w-full z-10">
              <Image
                src="https://images.unsplash.com/photo-1544717305-996b815c338c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                alt=""
                layout="fill"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="relative w-full md:w-1/2 px-4 pb-20 lg:pb-0">
            <div className="lg:ml-auto max-w-md">
              <h2 className="mb-6 lg:mb-10 text-4xl font-semibold font-heading">
                Expand your brand
              </h2>
              <p className="mb-6 lg:mb-10 text-xl text-gray-500">
                If you have ever wondered how to develop your brand, this is the
                place for you. Take a big step forward in growing your business
                with this great tool.
              </p>
              <div className="mb-10 border rounded-lg">
                <div className="flex p-4 border-b">
                  <svg
                    className="mr-4 mt-1"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                      fill="#45C1FF"
                    ></path>
                  </svg>
                  <h3 className="font-semibold font-heading">
                    Quick problem-solving contact
                  </h3>
                </div>
                <div className="flex p-4 border-b">
                  <svg
                    className="mr-4 mt-1"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                      fill="#45C1FF"
                    ></path>
                  </svg>
                  <h3 className="font-semibold font-heading">
                    Making changes simple and easy
                  </h3>
                </div>
                <div className="flex p-4">
                  <svg
                    className="mr-4 mt-1"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                      fill="#45C1FF"
                    ></path>
                  </svg>
                  <h3 className="font-semibold font-heading">
                    Exchangeable at any time
                  </h3>
                </div>
              </div>
              <a
                className="inline-block px-10 py-4 bg-red-400 hover:bg-red-300 text-sm text-white font-medium leading-normal rounded transition duration-200"
                href="#"
              >
                Activate Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

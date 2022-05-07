/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import ShadowBlueFull from "../../../public/elements/shadow-blue-full.svg";
import Ellipse from "../../../public/elements/ellipse.svg";

function HowItWork() {
  return (
    <section className="relative pt-32 bg-black pb-20">
      <div className="container mx-auto px-4 mb-24">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0">
            <div className="relative md:max-w-md">
              <h2 className="mb-6 text-3xl text-white uppercase font-heading">
                Increase your brand's regular profit
              </h2>
              <p className="mb-8 text-gray-500">
                If you have ever wondered how to develop your brand, this is the
                place for you. Take a big step forward in growing your business
                with this great tool.
              </p>
              <div className="relative">
                <div className="absolute top-0 left-0 transform ml-24 -translate-y-1/2 scale-200 opacity-50">
                  <Image src={ShadowBlueFull} alt="" />
                </div>
                <div className="relative flex flex-wrap">
                  <a
                    className="inline-flex justify-center w-full md:w-auto mb-6 lg:mb-0 md:mr-8 items-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
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
                    <span className="text-sm font-heading">Activate demo</span>
                  </a>
                  <a
                    className="inline-flex ml-auto md:ml-0 items-center text-white hover:underline"
                    href="#"
                  >
                    <span className="mr-2 text-sm font-heading">
                      Share with friends
                    </span>
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
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <ul>
              <li className="flex flex-wrap items-center mb-6">
                <div className="relative flex mr-4 items-center justify-center h-32 w-32">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <Image src={Ellipse} alt="" />
                  </div>
                  <span className="text-yellow-300">1</span>
                </div>
                <div className="w-full lg:w-2/3">
                  <h3 className="mb-4 text-2xl text-white font-heading">
                    Spectacular team plan
                  </h3>
                  <p className="text-lg text-gray-500">
                    Fairly assigning daily tasks to your employees take a big
                    step forward in growing.
                  </p>
                </div>
              </li>
              <li className="flex flex-wrap items-center mb-6">
                <div className="relative flex mr-4 items-center justify-center h-32 w-32">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <Image src={Ellipse} alt="" />
                  </div>
                  <span className="text-yellow-300">2</span>
                </div>
                <div className="w-full lg:w-2/3">
                  <h3 className="mb-4 text-2xl text-white font-heading">
                    Change of access
                  </h3>
                  <p className="text-lg text-gray-500">
                    Fairly assigning daily tasks to your employees take a big
                    step forward in growing.
                  </p>
                </div>
              </li>
              <li className="flex flex-wrap items-center">
                <div className="relative flex mr-4 items-center justify-center h-32 w-32">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <Image src={Ellipse} alt="" />
                  </div>

                  <span className="text-yellow-300">3</span>
                </div>
                <div className="w-full lg:w-2/3">
                  <h3 className="mb-4 text-2xl text-white font-heading">
                    List of regular users
                  </h3>
                  <p className="text-lg text-gray-500">
                    Fairly assigning daily tasks to your employees take a big
                    step forward in growing.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;

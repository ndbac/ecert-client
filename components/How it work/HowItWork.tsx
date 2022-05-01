/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

function HowItWork() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 items-center mb-12 lg:mb-20">
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <span className="text-xs text-blue-400 font-semibold">
              What's new at Shuffle
            </span>
            <h2 className="mt-8 mb-10 text-4xl font-semibold font-heading">
              Lorem ipsum dolor sit amet consectutar domor at elis
            </h2>
            <p className="text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
              aliquet orci.
            </p>
          </div>
          <div className="relative w-full lg:w-1/2 px-4 mx-5 md:mx-0">
            <div className="h-80 lg:h-128 mt-20 w-full">
              <Image
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                alt=""
                layout="fill"
                className="rounded-xl object-cover"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <button className="inline-block w-20 h-20 bg-red-400 hover:bg-red-300 rounded-full">
                <svg
                  className="mx-auto"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 13V3C0 1.35191 1.88153 0.411145 3.2 1.4L9.86667 6.4C10.9333 7.2 10.9333 8.8 9.86667 9.6L3.2 14.6C1.88153 15.5889 0 14.6481 0 13Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 py-6 px-4 flex items-start">
            <span className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 mr-6 bg-blue-400 rounded-full text-white">
              1
            </span>
            <p className="text-xl text-gray-500">
              Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
              sit amet tempus.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 py-6 px-4 flex items-start">
            <span className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 mr-6 bg-teal-400 rounded-full text-white">
              2
            </span>
            <p className="text-xl text-gray-500">
              Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
              sit amet tempus.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 py-6 px-4 flex items-start">
            <span className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 mr-6 bg-red-400 rounded-full text-white">
              3
            </span>
            <p className="text-xl text-gray-500">
              Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
              sit amet tempus.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 py-6 px-4 flex items-start">
            <span className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 mr-6 bg-yellow-400 rounded-full text-white">
              4
            </span>
            <p className="text-xl text-gray-500">
              Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
              sit amet tempus.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 py-6 px-4 flex items-start">
            <span className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 mr-6 bg-orange-400 rounded-full text-white">
              5
            </span>
            <p className="text-xl text-gray-500">
              Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
              sit amet tempus.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 py-6 px-4 flex items-start">
            <span className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 mr-6 bg-gray-900 rounded-full text-white">
              6
            </span>
            <p className="text-xl text-gray-500">
              Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
              sit amet tempus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;

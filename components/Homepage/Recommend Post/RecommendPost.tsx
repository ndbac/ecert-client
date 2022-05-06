/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import blueDotLeft from "../../../public/icons/dots/blue-dot-left-bars.svg";
import yellowDotRight from "../../../public/icons/dots/yellow-dot-right-shield.svg"

function RecommendPost() {
  return (
    <section className="relative py-20">
      <div className="hidden lg:block absolute top-0 left-0 mt-20">
        <Image src={blueDotLeft} alt="" />
      </div>

      <div className="hidden lg:block absolute top-0 right-0 mt-52">
        <Image src={yellowDotRight} alt="" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-20 text-center">
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
        <div className="flex flex-wrap -mx-4 -mb-16">
          <div className="w-full lg:w-2/3 px-4 mb-16">
            <div className="flex h-96 mb-10">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                alt=""
              />
            </div>
            <span className="inline-block mb-4 text-xs text-gray-500">
              10 jun 2020 19:40
            </span>
            <h2 className="mb-4 text-3xl font-semibold font-heading">
              Lorem ipsum dolor sit amet consectutar domor at elis
            </h2>
            <p className="mb-4 text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
              aliquet orci.
            </p>
            <a
              className="text-lg font-medium text-red-500 underline hover:no-underline"
              href="#"
            >
              Read more
            </a>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-16">
            <div className="flex h-96 mb-10">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                alt=""
              />
            </div>
            <span className="inline-block mb-4 text-xs text-gray-500">
              10 jun 2020 19:40
            </span>
            <h2 className="mb-4 text-3xl font-semibold font-heading">
              Lorem ipsum dolor
            </h2>
            <p className="mb-4 text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a
              className="text-lg font-medium text-red-500 underline hover:no-underline"
              href="#"
            >
              Read more
            </a>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-16">
            <div className="flex h-96 mb-10">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80"
                alt=""
              />
            </div>
            <span className="inline-block mb-4 text-xs text-gray-500">
              10 jun 2020 19:40
            </span>
            <h2 className="mb-2 text-3xl font-semibold font-heading">
              Lorem ipsum dolor
            </h2>
            <p className="mb-4 text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a
              className="text-lg font-medium text-red-500 underline hover:no-underline"
              href="#"
            >
              Read more
            </a>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-16">
            <div className="flex h-96 mb-10">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1557804506-d8017c1e4856?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1001&amp;q=80"
                alt=""
              />
            </div>
            <span className="inline-block mb-4 text-xs text-gray-500">
              10 jun 2020 19:40
            </span>
            <h2 className="mb-4 text-3xl font-semibold font-heading">
              Lorem ipsum dolor
            </h2>
            <p className="mb-4 text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a
              className="text-lg font-medium text-red-500 underline hover:no-underline"
              href="#"
            >
              Read more
            </a>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-16">
            <div className="flex h-96 mb-10">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                alt=""
              />
            </div>
            <span className="text-xs font-semibold text-gray-500">
              10 jun 2020 19:40
            </span>
            <h2 className="mb-4 text-3xl font-semibold font-heading">
              Lorem ipsum dolor
            </h2>
            <p className="mb-4 text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a
              className="text-lg font-medium text-red-500 underline hover:no-underline"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecommendPost;

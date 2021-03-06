/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

import ShadowBlueFull from '../../public/elements/shadow-blue-full.svg'
import ShadowLight7 from '../../public/elements/shadow-light-7.svg'
// import BlueDot from "../../public/icons/dots/blue-dot-left-bars.svg";
// import YellowDot from "../../public/icons/dots/yellow-dot-right-shield.svg";

import Postcard from './Postcard/Postcard'

function Discovery() {
  return (
    <section className="relative py-20 bg-black">
      <div className="absolute top-0 left-0 -ml-40">
        <Image src={ShadowBlueFull} alt="" />
      </div>
      <div className="hidden sm:block absolute top-1/2 right-0 -mr-52 transform -translate-y-1/2 object-contain">
        <Image src={ShadowLight7} alt="" />
      </div>
      {/* <div className="hidden lg:block absolute top-0 left-0 mt-20">
        <Image
          src={BlueDot}
          alt=""
        />
      </div>
      <div className="hidden lg:block absolute top-0 right-0 mt-52">
        <Image
          src={YellowDot}
          alt=""
        />
      </div> */}
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-20 mx-auto text-center">
          <span className="text-xl text-yellow-400 font-semibold">
            What's new at Shuffle
          </span>
          <h2 className="text-white mt-8 mb-10 text-4xl font-semibold font-heading">
            Lorem ipsum dolor sit amet consectutar domor at elis
          </h2>
          <p className="text-xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
            aliquet orci.
          </p>
        </div>
        <div className="flex flex-wrap -m-3 mb-16">
          <Postcard />
          <Postcard />
          <Postcard />
          <Postcard />
          <Postcard />
        </div>
        <div className="text-center">
          <a
            className="px-6 py-4 text-sm font-semibold bg-yellow-400 hover:bg-yellow-500 rounded transition duration-200"
            href="#"
          >
            View More Articles
          </a>
        </div>
      </div>
    </section>
  )
}

export default Discovery

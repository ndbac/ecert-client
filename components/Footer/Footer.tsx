import Image from 'next/image'

import Logo from '../../public/logo/logo-boldui-light.svg'
import Facebook from '../../public/brands/small-logos/facebook.svg'
import Twitter from '../../public/brands/small-logos/twitter.svg'
import Instagram from '../../public/brands/small-logos/instagram.svg'
import Linkedin from '../../public/brands/small-logos/linkedin.svg'
import Github from '../../public/brands/small-logos/github.svg'

function Footer() {
  return (
    <section className="bg-black overflow-x-hidden">
      <div className="border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 mb-10 md:mb-0">
            <div className="w-full md:w-2/6 md:border-r md:border-gray-800 px-4">
              <div className="max-w-xs mx-auto py-20">
                <a
                  className="inline-block text-xl text-white font-medium font-heading mb-8 md:mb-32"
                  href="#"
                >
                  <Image className="h-8" src={Logo} alt="" />
                </a>
                <p className="max-w-xs text-white uppercase font-heading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="w-full md:w-4/6 px-4">
              <div className="md:py-20 px-8 lg:pl-20 lg:pr-10">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-1/2 md:w-1/4 px-4 mb-12 md:mb-0">
                    <h3 className="mb-8 text-sm text-white uppercase font-heading">
                      Company
                    </h3>
                    <ul>
                      <li className="mb-8">
                        <a
                          className="text-gray-500 hover:text-gray-400"
                          href="#"
                        >
                          Careers
                        </a>
                      </li>
                      <li className="mb-8">
                        <a
                          className="text-gray-500 hover:text-gray-400"
                          href="#"
                        >
                          Press
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-500 hover:text-gray-400"
                          href="#"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-1/2 md:w-1/4 px-4 mb-12 md:mb-0">
                    <h3 className="mb-8 text-sm text-white uppercase font-heading">
                      Pages
                    </h3>
                    <ul>
                      <li className="mb-8">
                        <a
                          className="text-gray-500 hover:text-gray-400"
                          href="#"
                        >
                          Login
                        </a>
                      </li>
                      <li className="mb-8">
                        <a
                          className="text-gray-500 hover:text-gray-400"
                          href="#"
                        >
                          Register
                        </a>
                      </li>
                      <li className="mb-8">
                        <a
                          className="text-gray-500 hover:text-gray-400"
                          href="#"
                        >
                          Add list
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-500 hover:text-gray-400"
                          href="#"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-1/2 md:w-1/4 px-4">
                    <h3 className="mb-8 text-sm text-white uppercase font-heading">
                      Legal
                    </h3>
                    <ul>
                      <li className="mb-8">
                        <a
                          className="text-gray-500 hover:text-gray-400"
                          href="#"
                        >
                          Terms
                        </a>
                      </li>
                      <li className="mb-8">
                        <a
                          className="text-gray-500 hover:text-gray-400"
                          href="#"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="mb-8">
                        <a
                          className="text-gray-500 hover:text-gray-400"
                          href="#"
                        >
                          Team
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-500 hover:text-gray-400"
                          href="#"
                        >
                          Privacy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-1/2 md:w-1/4 px-4">
                    <h3 className="mb-8 text-sm text-white uppercase font-heading">
                      Resources
                    </h3>
                    <ul>
                      <li className="mb-8">
                        <a
                          className="text-gray-500 hover:text-gray-400"
                          href="#"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="mb-8">
                        <a
                          className="text-gray-500 hover:text-gray-400"
                          href="#"
                        >
                          Service
                        </a>
                      </li>
                      <li className="mb-8">
                        <a
                          className="text-gray-500 hover:text-gray-400"
                          href="#"
                        >
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-500 hover:text-gray-400"
                          href="#"
                        >
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <p className="mb-8 md:mb-0 text-gray-500">
              All rights reserved © BoldUI 2021
            </p>
            <div className="flex w-full md:w-auto">
              <a className="mr-8" href="#">
                <Image src={Facebook} alt="" />
              </a>
              <a className="mr-8" href="#">
                <Image src={Twitter} alt="" />
              </a>
              <a className="mr-8" href="#">
                <Image src={Instagram} alt="" />
              </a>
              <a className="mr-8" href="#">
                <Image src={Linkedin} alt="" />
              </a>
              <a href="#">
                <Image src={Github} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Logo from '../../public/logo/logo-boldui-light.svg'

function Navbar() {
  const [navBar, setNavBar] = useState(false)

  return (
    <section className="relative bg-black overflow-hidden">
      <nav className="relative flex px-16 justify-between bg-transparent border-b">
        <div className="pr-14 py-8 lg:border-r">
          <Link href="/">
            <a
              className="inline-block text-xl text-white font-medium font-heading"
              href="#"
            >
              <Image className="h-8" src={Logo} alt="" />
            </a>
          </Link>
        </div>
        <div className="hidden lg:flex items-center ml-10 xl:ml-0 py-8 xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-y-1/2 xl:-translate-x-1/2">
          <ul className="flex justify-center items-center">
            <li className="mr-12">
              <Link href="/discovery">
                <a className="text-gray-500 hover:text-gray-400" href="#">
                  Discovery
                </a>
              </Link>
            </li>
            <li className="mr-12">
              <a className="text-gray-500 hover:text-gray-400" href="#">
                Company
              </a>
            </li>
            <li className="mr-12">
              <a className="text-gray-500 hover:text-gray-400" href="#">
                Services
              </a>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-gray-500 hover:text-gray-400" href="#">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex ml-auto items-center">
          <Link href="/login">
            <a
              className="inline-flex mr-8 items-center text-white hover:underline"
              href="#"
            >
              <span className="mr-2 text-xs font-heading">Sign In</span>
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
          </Link>
          <Link href="/register">
            <a
              className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
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
              <span className="text-xs font-heading">Sign Up</span>
            </a>
          </Link>
        </div>
        <button
          className="navbar-burger lg:hidden self-center"
          onClick={() => setNavBar(!navBar)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="6" width="24" height="2" fill="white"></rect>
            <rect y="11" width="24" height="2" fill="white"></rect>
            <rect y="16" width="24" height="2" fill="white"></rect>
          </svg>
        </button>
      </nav>
      <div
        className={
          navBar
            ? 'navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50'
            : 'hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50'
        }
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={() => setNavBar(!navBar)}
        ></div>
        <nav className="relative flex flex-col py-8 px-10 w-full h-full bg-black border-r overflow-y-auto">
          <Link href="/">
            <a
              className="inline-block text-xl text-white font-medium font-heading mb-16 md:mb-32"
              href="#"
            >
              <Image className="h-8" src={Logo} alt="" />
            </a>
          </Link>
          <ul className="mb-32">
            <li className="mb-10">
              <a className="flex items-center" href="#">
                <span className="mr-3 text-lg text-white">About</span>
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="mb-10">
              <a className="flex items-center" href="#">
                <span className="mr-3 text-lg text-white">Company</span>
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="mb-10">
              <a className="flex items-center" href="#">
                <span className="mr-3 text-lg text-white">Services</span>
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <Link href="/contact">
                <a className="flex items-center" href="#">
                  <span className="mr-3 text-lg text-white">Contact</span>
                  <svg
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                      fill="#FFEC3E"
                    ></path>
                  </svg>
                </a>
              </Link>
            </li>
          </ul>
          <Link href="/register">
            <a
              className="flex mb-8 items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
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
              <span className="text-sm font-medium uppercase tracking-wider">
                Sign Up
              </span>
            </a>
          </Link>
          <Link href="/login">
            <a
              className="flex mb-10 items-center text-white hover:underline"
              href="#"
            >
              <span className="mr-2 text-sm">Log In</span>
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
          </Link>
          <p className="text-sm text-gray-500">
            All rights reserved © BoldUI 2021
          </p>
        </nav>
      </div>
    </section>
  )
}

export default Navbar

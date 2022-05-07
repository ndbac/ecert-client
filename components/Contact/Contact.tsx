import ShadowBlueFull from "../../public/elements/shadow-blue-full.svg";
import Image from "next/image";
import Map from "../../public/images/map1.png";
function Contact() {
    return (
      <section className=" pt-20 bg-black ">
  
            <div className="flex px-6 md:px-12 flex-wrap items-center justify-center">
              <div className="m-auto">
              <div className="text-center px-4 relative pb-10">
                  <div className="text-5xl text-yellow-400 pb-3">Contact Us</div>
                  <div className="text-white md:text-gray-500 text-xl">We are here to help and answer any question you might have. We love forward to hearing from you</div>
                  <div className="absolute lg:-top-20 left-1/2 -translate-x-1/2 -top-20 w-96">
                    <Image src={ShadowBlueFull} alt="" />
                  </div>
              </div>
                <div className="px-4 pt-4">
                  <div className="text-white text-3xl text-center pt-6 pb-10 font-semibold">Send us a message!</div>
                  <div>
                    <div className="flex flex-wrap justify-between">
                      <div className="w-full lg:w-auto pr-2">
                        <div className="text-lg text-white md:text-gray-500 pl-4 pb-2">First Name:  </div>
                        <input type="text" className="w-full lg:w-96 mb-4 py-4 px-10 bg-black rounded-full border text-white outline-none placeholder-white" placeholder="First name" />
                      </div>
                      <div className="w-full lg:w-auto pl-2">
                        <div className="text-lg text-white md:text-gray-500 pl-4 pb-2">Last Name: </div>
                        <input type="text" className="w-full lg:w-96 mb-4 py-4 px-10 bg-black rounded-full border text-white outline-none placeholder-white" placeholder="Last name" />
                      </div>
                      
                    </div>
                    <div>
                        <div className="text-lg text-white md:text-gray-500 pl-4 pb-2">Email: </div>
                            <input type="text" className="w-full mb-4 py-4 px-10 bg-black rounded-full border text-white outline-none placeholder-white" placeholder="Enter your email" />
                    </div>
                    <div>
                        <div className="text-lg text-white md:text-gray-500 pl-4 pb-2">Additional Details: </div>
                            <textarea className="w-full mb-4 py-4 px-10 bg-black rounded-md border text-white outline-none placeholder-white" placeholder="What can we help you with?" />
                    </div>
                    <label className="block mb-6" >
                      <input type="checkbox" />
                      <span className="text-sm text-white">
                        <span>By signing up, you agree to our</span>
                        <a className="text-blue-200 hover:underline" href="#"> Terms, Data Policy and Cookies Policy.</a>
                      </span>
                  </label>
                    <div className="pt-6">
                        <a href="#" className="px-6 py-4 text-sm font-semibold bg-yellow-400 hover:bg-yellow-500 rounded transition duration-200">Send Message</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="text-center pt-20 relative">
                <Image className="h-full w-full object-fit" src={Map} alt="map"/>
                <div className="absolute top-1/2 -translate-y-1/2 right-1/2 py-6 px-6 bg-black border overflow-hidden">
                  <div className="md:block hidden">
                        <h3 className="mb-1 text-xs text-gray-500 font-semibold uppercase tracking-widest">Address</h3>
                        <p className="mb-2 text-xs text-white">B1, Bach Khoa, Ha Noi</p>
                        <h3 className="mb-1 text-xs text-gray-500 font-semibold uppercase tracking-widest">Contacts</h3>
                        <p className="text-xs text-white">hello@shuffle.dev</p>
                        <p className="text-xs text-white">+7 843 672 431</p>

            </div>
          </div>
              </div>
      </section>
    )
  }
  
  export default Contact

import Image from "next/image"
import ShadowLight7 from "../../public/elements/shadow-light-7.svg";
import Email from "../../public/elements/email.svg";
import FB from "../../public/elements/fb.svg";
import Twitter from "../../public/elements/twitter.svg";
import LinkedIn from "../../public/elements/linkedln.svg";


const ProfileCard = () => {
    return(
        <div className="relative pt-14 bg-black text-white shadow rounded overflow-hidden">
            <div className="hidden sm:block absolute top-1/2 right-0 -mr-52 transform -translate-y-1/2 object-contain">
                <Image src={ShadowLight7} alt="" />
            </div>
            <img className="relative w-16 h-16 mb-4 mx-auto rounded-full object-cover object-right" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt=""></img>
            <div className="px-6 text-center">
            <h3 className="font-medium"> Jane Thomas </h3>
            <p className="mb-6 text-sm text-gray-500">Designer &amp; Front-End Developer</p>
            <div className="flex items-center justify-center mb-6">
                <span className="mr-2">
                    <Image src={Email} alt=""/>
                </span>
                <p className="text-sm">jane.thomas@shuffle.dev</p>
            </div>
            <div className="mb-6">
                <a className="inline-flex items-center justify-center mr-6 w-10 h-10 bg-gray-50 rounded-full" href="#">
                    <Image src={FB} alt=""/>
                </a>
                <a className="inline-flex items-center justify-center mr-6 w-10 h-10 bg-gray-50 rounded-full" href="#">
                    <Image src={Twitter} alt=""/>
                </a>
                <a className="inline-flex items-center justify-center w-10 h-10 bg-gray-50 rounded-full" href="#">
                    <Image src={LinkedIn} alt=""/>
                </a>
            </div>
            <div className="mb-6"><a className="py-1 px-2 mr-2 text-xs rounded border" href="#">Front-End</a><a className="py-1 px-2 mr-2 text-xs rounded border" href="#">Design</a><a className="py-1 px-2 text-xs rounded border" href="#">Product Development</a></div>
            </div>
        </div>
    )
}

export default ProfileCard
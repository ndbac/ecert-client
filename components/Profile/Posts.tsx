import Postcard from "../Discovery/Postcard/Postcard";
import Image from "next/image";
import ShadowBlueFull from "../../public/elements/shadow-blue-full.svg";
import ShadowLight7 from "../../public/elements/shadow-light-7.svg";

const Posts = () => {
    return(
        <section className="relative py-20 bg-black">
            <div className="absolute top-0 left-0 -ml-40">
                <Image src={ShadowBlueFull} alt="" />
            </div>
            <div className="hidden sm:block absolute top-1/2 right-0 -mr-52 transform -translate-y-1/2 object-contain">
                <Image src={ShadowLight7} alt="" />
            </div>
            <div className="container px-4 mx-auto">
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
                    View More Articles.
                </a>
                </div>
            </div>
        </section>
        // <table className="w-full">
        //     <thead>
        //         <tr>
        //         <th className="w-1/3 p-2">Title</th>
        //         <th className="w-1/3 p-2">Tags</th>
        //         <th className="w-1/3 p-2">Date</th>
        //         </tr>
        //     </thead>
        //     <tbody className="text-center">
        //         <tr className="w-full">
        //         <td className="p-2">SINNO Recruitment</td>
        //         <td className="p-2">Gen2, future</td>
        //         <td className="p-2">5-5-2022</td>
        //         </tr>
        //         <tr>
        //         <td className="p-2">New Year</td>
        //         <td className="p-2">New begin</td>
        //         <td className="p-2">1-1-2022</td>
        //         </tr>
        //         <tr>
        //         <td className="p-2">Year Recap</td>
        //         <td className="p-2">Achievement</td>
        //         <td className="p-2">15-12-2022</td>
        //         </tr>
        //     </tbody>
        // </table>
    )
}

export default Posts;
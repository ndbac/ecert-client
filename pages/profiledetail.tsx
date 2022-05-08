import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer/Footer";
import type { NextPage } from "next";
import ProfileCard from "../components/Profile/ProfileCard";
import Navigation from "../components/Profile/Navigation";

const Profile: NextPage = () => {
    return (
        <div className="max-w-screen-xl bg-black mx-auto">
            <Navbar />
            <ProfileCard/>
            <Navigation/>
            <div className="w-2/3 mx-auto text-white border rounded flex flex-wrap">    
                <div className="w-full flex">
                    <div className="w-1/2 py-5 font-light">
                        <div className="w-full p-5">Name:</div>
                        <div className="w-full p-5">D.o.B:</div>
                        <div className="w-full p-5">Email:</div>
                        <div className="w-full p-5">Organization:</div>
                    </div>
                    <div className="w-1/2 py-5">
                        <div className="w-full p-5">Sad boi</div>
                        <div className="w-full p-5">15/12/2002</div>
                        <div className="w-full p-5">sad@gmail.com</div>
                        <div className="w-full p-5">Sinno</div>
                    </div>
                </div>
            </div> 
            <Footer />
        </div>
    )
}

export default Profile;
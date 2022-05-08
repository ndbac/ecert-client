import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer/Footer";
import type { NextPage } from "next";
import Posts from "../components/Profile/Posts";
import ProfileCard from "../components/Profile/ProfileCard";
import Navigation from "../components/Profile/Navigation";

const Profile: NextPage = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar />
            <ProfileCard/>
            <Navigation/>
            <Posts/>
            {/* <div className="w-full xl:w-2/3 m-auto p-5 sm:flex text-sm text-white">
                <Navigation/>
                <ProfileCard/>
            </div> */}
            
            <Footer />
        </div>
    )
}

export default Profile;
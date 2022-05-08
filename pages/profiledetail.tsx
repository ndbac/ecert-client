import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer/Footer";
import type { NextPage } from "next";
import ProfileCard from "../components/Profile/ProfileCard";
import Navigation from "../components/Profile/Navigation";
import ProfileDetail from "../components/Profile/ProfileDetail";

const Profile: NextPage = () => {
    return (
        <div className="max-w-screen-xl bg-black mx-auto">
            <Navbar />
            <ProfileCard/>
            <Navigation/>
            <ProfileDetail/>
            <Footer />
        </div>
    )
}

export default Profile;
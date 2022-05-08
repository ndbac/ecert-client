import type { NextPage } from "next";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
const ContactPage: NextPage = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar />
            <Contact/>
            <Footer />
        </div>
    )
}
export default ContactPage;
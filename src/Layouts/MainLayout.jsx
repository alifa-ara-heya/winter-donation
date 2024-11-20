import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        })
    }, []);

    return (
        <div className="font-poppins">
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default MainLayout;
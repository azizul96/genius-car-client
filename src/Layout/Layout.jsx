import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="py-3 mb-5">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>

            <div>
                <Footer></Footer>
            </div>
            <div><Toaster/></div>
        </div>
    );
};

export default Layout;
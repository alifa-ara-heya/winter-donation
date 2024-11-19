import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    const getNavLinkActiveClass = ({ isActive }) =>
        `${isActive && 'bg-[#a4cc6f] focus:bg-[#a4cc6f] text-black'}`;

    const links = <>
        <li><NavLink className={getNavLinkActiveClass} to='/'>Home</NavLink></li>
        <li><NavLink className={getNavLinkActiveClass} to='/donation-campaigns'>Donation campaigns</NavLink></li>
        <li><NavLink className={getNavLinkActiveClass} to='/how-to-help'>How to Help</NavLink></li>
        <li><NavLink className={getNavLinkActiveClass} to='/dashboard'>Dashboard</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 max-w-[1440px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 backdrop-blur-md bg-white/30 w-52 p-2 shadow space-y-3 text-white">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl ">Winter Aid</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal !important px-1 gap-10">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-primary">Login</a>
            </div>
        </div>
    );
};

export default Navbar;
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const getNavLinkActiveClass = ({ isActive }) =>
        `${isActive && 'bg-[#a4cc6f] focus:bg-[#a4cc6f] text-black'}`;

    const links = <>
        <li><NavLink className={getNavLinkActiveClass} to='/'>Home</NavLink></li>
        <li><NavLink className={getNavLinkActiveClass} to='/donation-campaigns'>Donation campaigns</NavLink></li>
        <li><NavLink className={getNavLinkActiveClass} to='/how-to-help'>How to Help</NavLink></li>
        <li><NavLink className={getNavLinkActiveClass} to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink className={getNavLinkActiveClass} to='/register'>Register</NavLink></li>
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 backdrop-blur-md bg-white/30 w-52 p-2 shadow space-y-3 text-black">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-2xl text-lime-900 ">Winter Aid</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal !important px-1 gap-10">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {
                    user?.email ? (
                        <>
                            <div className="border rounded-full p-1 border-lime-700"><img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" /></div>
                            <p className="text-lime-600">{user.displayName}</p>
                            <button className="btn bg-primary" onClick={signOutUser}>LogOut</button>
                        </>
                    ) : (
                        <Link to='/login' className="btn bg-primary">Login</Link>
                    )
                }

            </div>
        </div>
    );
};

export default Navbar;
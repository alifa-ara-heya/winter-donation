
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";


const ForgotPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState(location.state?.email || "")

    const handleResetPassword = e => {
        e.preventDefault();

        if (!email) {
            toast.error("Please provide an email address.");
            return;
        }

        // Redirect to Gmail
        window.open("https://mail.google.com", "_blank"); // Open Gmail in a new tab
        toast.success("Redirecting to Gmail...");
        navigate("/login"); // Optionally navigate back to the login page
    }

    return (
        <div className="flex justify-center items-center  bg-primary/10 min-h-screen">
            <div className="">
                <div className="text-center">
                    <h1 className="text-3xl font-medium text-lime-900 mb-5">Forgot Password?</h1>
                </div>

                <div className="card bg-primary/20 w-full max-w-md shrink-0 shadow-2xl">
                    <form onSubmit={handleResetPassword} className="card-body px-20">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                value={email}
                                className="input input-bordered"
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">New Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-primary text-black mb-2 hover:bg-primary/60 border-none">Reset Password</button>
                        </div>

                        <p><br />Please <Link className="btn-link text-lime-800 " to='/login'>Login.</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
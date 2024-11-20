import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
// import { auth } from "../firebase/firebase.config";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {

    // const provider = new GoogleAuthProvider();

    // const handleGoogleSignIn2 = () => {
    //     console.log("Google Sign-In initiated");
    //     signInWithPopup(auth, provider)
    //         .then(result => {
    //             console.log("Google Sign-In successful:", result.user);
    //             // setUser(result.user);
    //         })
    //         .catch(error => {
    //             console.log("Google Sign-In error:", error);
    //             // setUser(null);
    //         })
    // }

    // const navigate = useNavigate();

    const { signInWithGoogle } = useContext(AuthContext);
    // console.log(signInWithGoogle);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log('Google Login user', result.user);
            })
            .catch(error => {
                console.log('My error when logged in with Google is', error.message);
            })
    }

    return (
        <div className="flex justify-center items-center  bg-primary/10 min-h-screen">
            <div className="">
                <div className="text-center">
                    <h1 className="text-3xl font-medium text-lime-900 mb-5">Login now!</h1>
                </div>

                <div className="card bg-primary/20 w-full max-w-md shrink-0 shadow-2xl">
                    <form className="card-body px-20">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='/forgot-password' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-primary text-black mb-4 hover:bg-primary/60 border-none">Login</button>
                        </div>

                        <p>Don&apos;t have an account? <br />Please <Link className="btn-link text-lime-800 " to='/register'>Register.</Link></p>

                        <p>or,</p>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline border-primary hover:bg-primary/50 hover:text-black">Login With Google <FcGoogle size={20} /></button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login;
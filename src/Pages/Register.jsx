import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
    const { createUser, setUser, updateUserProfile } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password, photo);

        // create user
        createUser(email, password)
            .then(result => {
                console.log("User with sign in", result.user);
                setUser(result.user);
                updateUserProfile({ displayName: name, photoURL: photo })
                toast.success('Registration Successful.')


            }).catch(error => {
                console.log("My error with sign in is", error);
            })
    }

    return (
        <div className="flex justify-center items-center bg-primary/10 min-h-screen">
            <div className="">
                <div className="text-center">
                    <h1 className="text-3xl font-medium text-lime-900 mb-5">Register now!</h1>
                </div>

                <div className="card bg-primary/20 w-full max-w-md shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body px-20">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name"
                                name="name"
                                className="input input-bordered " required />
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email" placeholder="email" className="input input-bordered " required />
                        </div>
                        {/* photo url */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered " required />
                        </div>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-primary hover:bg-primary/60 border-none text-black mb-4">Register</button>
                        </div>

                        <p>Already have an account? Please <Link className="btn-link text-lime-800" to='/login'>Login.</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;
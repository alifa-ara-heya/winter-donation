import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, email, password, photo);

        setErrorMsg('');

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            // toast.error('Please use at least one uppercase, one lowercase, one number and one special character(!,@,&) and make sure the length of the password is more than six characters.');
            setErrorMsg('Please use at least one uppercase, one lowercase, one number and one special character(!,@,&) and make sure the length of the password is more than six characters.')
            return;
        }

        // create user
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                // console.log("User with sign in", createdUser);
                // setUser(result.user);

                //update profile
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        // Refreshing user to get updated profile
                        setUser({ ...createdUser, displayName: name, photoURL: photo });
                        navigate('/');
                        toast.success('Registration Successful.');
                    })
                    .catch((error) => {
                        console.error("Error updating profile:", error);
                    });
                // toast.success('Registration Successful.')
            })
            .catch(error => {
                // console.log('ERROR', error.message);
                toast.error(error.message)
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
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                placeholder="password"
                                className="input input-bordered" required />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className='btn btn-xs absolute right-2 top-12'>
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </button>
                            {
                                errorMsg && <p className='text-red-600 text-xs mt-6'>{errorMsg}</p>
                            }
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
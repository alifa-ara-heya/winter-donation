import { Link } from "react-router-dom";

const UpdateProfile = () => {
    return (
        <div className="flex justify-center items-center  bg-primary/10 min-h-screen">
            <div className="">
                <div className="text-center">
                    <h1 className="text-3xl font-medium text-lime-900 mb-5">Update Profile</h1>
                </div>

                <div className="card bg-primary/20 w-full max-w-md shrink-0 shadow-2xl">
                    <form className="card-body px-20">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Update Name" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="password" placeholder="Update Photo URL" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-primary text-black mb-2 hover:bg-primary/60 border-none">Update Profile</button>
                        </div>

                        <p><br />Please <Link className="btn-link text-lime-800 " to='/login'>Login.</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
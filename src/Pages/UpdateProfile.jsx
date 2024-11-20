import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const UpdateProfile = () => {

    const { user, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState(user?.displayName || '');
    const [photo, setPhoto] = useState(user?.photoURL || '');

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        if (!photo || !name) {
            toast.error('Both fields are required.');
            return;
        }

        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo });
                toast.success('Profile Updated successfully.')
                navigate('/dashboard')
            })
            .catch(error => {
                console.log('Error updating profile', error.message);
                toast.error(`failed to update profile. ${error.message}`)
            });
    };

    return (
        <div className="flex justify-center items-center  bg-primary/10 min-h-screen">
            <div className="">
                <div className="text-center">
                    <h1 className="text-3xl font-medium text-lime-900 mb-5">Update Profile</h1>
                </div>

                <div className="card bg-primary/20 w-full max-w-md shrink-0 shadow-2xl">
                    <form onSubmit={handleUpdateProfile} className="card-body px-20">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                value={name}
                                // without onChange user will not be able to update the name.
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Update Name" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"
                                value={photo}
                                onChange={(e) => setPhoto(e.target.value)} placeholder="Update Photo URL" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-primary text-black mb-2 hover:bg-primary/60 border-none">Update Profile</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
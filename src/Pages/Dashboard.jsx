import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="flex flex-col items-center justify-center bg-primary/10 min-h-screen p-6">
            <h1 className="text-4xl font-bold text-lime-900 mb-4">
                Welcome, {user?.displayName || "User"}!
            </h1>

            <div className="card w-full max-w-md bg-white shadow-xl p-6 rounded-lg">
                <div className="flex flex-col items-center">
                    {/* User Profile Picture */}
                    <img
                        src={user?.photoURL || "https://via.placeholder.com/150"}
                        alt="Profile"
                        className="w-32 h-32 rounded-full mb-4 border-4 border-lime-700"
                    />

                    {/* Profile Information */}
                    <div className="text-center">
                        <p className="text-lg font-medium text-gray-700">
                            <span className="font-bold text-lime-800">Name:</span> {user?.displayName || "N/A"}
                        </p>
                        <p className="text-lg font-medium text-gray-700">
                            <span className="font-bold text-lime-800">Email:</span> {user?.email || "N/A"}
                        </p>
                    </div>
                </div>

                {/* Update Profile Button */}
                <div className="mt-6 text-center">
                    <Link
                        to="/update-profile"
                        className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80"
                    >
                        Update Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
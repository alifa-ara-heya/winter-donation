import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <p>Dashboard</p>
            <Link to='/update-profile' className="btn bg-primary">Update Profile</Link>
        </div>
    );
};

export default Dashboard;
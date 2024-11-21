import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import DonationCampaigns from "../Pages/DonationCampaigns";
import HowToHelp from "../Pages/HowToHelp";
import Dashboard from "../Pages/Dashboard";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import DonationDetails from "../Pages/DonationDetails";

const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout />,
            errorElement: <Error />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: 'donation-campaigns',
                    element: <DonationCampaigns />,
                    loader: () => fetch('/donationCampaignData.json')
                },
                {
                    path: 'details/:id',
                    element: <PrivateRoute>
                        <DonationDetails />
                    </PrivateRoute>,
                    loader: async ({ params }) => {
                        const res = await fetch('/donationCampaignData.json')
                        const data = await res.json()
                        const singleData = data.find(d => d.id === parseInt(params.id))
                        return singleData;
                    }
                },
                {
                    path: 'how-to-help',
                    element: <HowToHelp />
                },
                {
                    path: 'dashboard',
                    element: <PrivateRoute><Dashboard /></PrivateRoute>
                },
                {
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'register',
                    element: <Register />
                },
                {
                    path: 'forgot-password',
                    element: <ForgotPassword />
                },
                {
                    path: 'update-profile',
                    element: <UpdateProfile />
                }

            ]
        }
    ]
)

export default Router;
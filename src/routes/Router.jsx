import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import DonationCampaigns from "../Pages/DonationCampaigns";
import HowToHelp from "../Pages/HowToHelp";
import Dashboard from "../Pages/Dashboard";
import Error from "../Pages/Error";

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
                    element: <DonationCampaigns />
                },
                {
                    path: 'how-to-help',
                    element: <HowToHelp />
                },
                {
                    path: 'dashboard',
                    element: <Dashboard />
                }

            ]
        }
    ]
)

export default Router;
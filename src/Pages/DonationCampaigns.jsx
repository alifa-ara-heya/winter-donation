import { useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";
import Heading from "../components/Heading/Heading";

const DonationCampaigns = () => {
    const campaignsData = useLoaderData();
    // console.log(campaignsData);
    return (
        <div className="w-11/12 mx-auto py-6">
            <Heading title={'Donation Campaigns'} subtitle={' Together, we can make winters warmer for those in need.'} />
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 py-10">
                {
                    campaignsData.map(campaign => <DonationCard campaign={campaign} key={campaign.id}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default DonationCampaigns;
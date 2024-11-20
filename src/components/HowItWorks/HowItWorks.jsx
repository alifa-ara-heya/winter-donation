import { FaArrowRight } from "react-icons/fa";
import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";

const HowItWorks = () => {
    return (
        <div className="w-11/12 mx-auto py-5 max-w-[1440px]">
            <Heading title={'How It Works'} subtitle={'Donating through WinterAid is simple! Follow these steps to make a difference:'}></Heading>

            {/* Instructions List */}
            <div className="my-6">
                <div className="p-10 md:px-40 lg:px-56">
                    <h2 className="text-2xl font-semibold text-lime-800 mb-4">Steps to Donate</h2>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700 px-6">
                        <li>
                            <strong>Log In or Sign Up:</strong> <Link to='/register' className="underline text-lime-700 cursor-pointer" >Create an account</Link> to join our community.
                        </li>
                        <li>
                            <strong>Select a Campaign:</strong> Browse active donation campaigns in your area and choose one to contribute to.
                        </li>
                        <li>
                            <strong>Prepare Your Donation:</strong> Gather your unused winter essentials like clothes, blankets, and other warm items.
                        </li>
                        <li>
                            <strong>Drop Off or Schedule a Pickup:</strong> Bring your donations to one of our collection points or schedule a convenient pickup.
                        </li>
                    </ol>
                </div>

                <div className="text-center"><Link to='/how-to-help' className="btn my-4 bg-primary">Read More <FaArrowRight /></Link></div>
            </div>
        </div>


    );
};

export default HowItWorks;
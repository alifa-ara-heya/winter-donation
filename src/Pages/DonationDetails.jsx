import { BiSolidContact } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { HiMap } from "react-icons/hi";
import { useLoaderData } from "react-router-dom";
import DonationForm from "../components/DonationForm/DonationForm";

const DonationDetails = () => {
    const { id, title, image, description, contactInfo, status, division } = useLoaderData();
    // console.log(id);
    return (
        <div className="md:p-10">
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md border">
                {/* Image Section */}
                <div className="relative">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-80 object-cover rounded-t-lg"
                    />
                    <div
                        className={`absolute top-4 left-4 px-3 py-1 text-sm font-bold rounded-full ${status === "Active"
                            ? "bg-green-500 text-white"
                            : status === "Pending"
                                ? "bg-yellow-500 text-white"
                                : "bg-gray-500 text-white"
                            }`}
                    >
                        {status}
                    </div>
                </div>
                {/* Card Content */}
                <div className="p-6 space-y-4">
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                    {/* Description */}
                    <p className="text-gray-600">{description}</p>
                    {/* Additional Details */}
                    <div className="space-y-2">
                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-3">
                                <BiSolidContact size={30} color="#a4cc6f" />
                                <span className="font-semibold text-gray-700">Email: </span>

                                <span className="text-gray-600">{contactInfo.split('|')[0]} </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhoneSquareAlt size={30} color="#a4cc6f" />
                                <span className="font-semibold text-gray-700">Mobile: </span>
                                <span className="text-gray-600">{contactInfo.split('|')[1]}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <HiMap size={30} color="#a4cc6f" />
                                <span className="font-semibold text-gray-700">Division: </span>
                                <span className="text-gray-600">{division}</span>
                            </div>
                        </div>

                    </div>
                    {/* Call to Action */}
                    <div className="mt-4">
                        <button className="w-full py-2 text-white bg-primary hover:bg-primary/80 rounded-lg">
                            Support This Campaign
                        </button>
                    </div>
                </div>
            </div>

            <DonationForm />
        </div>
    );
};

export default DonationDetails;
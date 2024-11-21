import { Link } from "react-router-dom";

const DonationCard = ({ campaign }) => {
    // console.log(campaign);
    const { id, title, image, description, contactInfo, status, divison } = campaign;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes"
                    className="w-full h-[250px] object-cover" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title">{title}</h2>
                <p className="text-gray-600 ">{description}</p>
                <div className="card-actions justify-start">
                    <Link to={`/details/${id}`} className="btn bg-primary">Donate Now</Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;
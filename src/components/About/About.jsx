import Heading from "../Heading/Heading";
import winter1 from '../../assets/winter-1.jpg'
import winter2 from '../../assets/winter2.jpg'
import winter3 from '../../assets/winter3.jpg'
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div className="w-11/12 mx-auto py-10 max-w-[1440px]">
            <Heading title={"Our Mission"} subtitle={"At WinterAid, we believe that everyone deserves warmth and comfort, especially during the harsh winter months. Our mission is to bridge the gap between those who want to give and those in need by providing a platform that connects donors with vulnerable communities across Bangladesh."}></Heading>

            {/* how you can contribute */}
            <h3 className="text-2xl capitalize font-bold text-lime-800 py-6 text-center">how you can contribute</h3>


            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                {/* card-1 */}
                <div className="card bg-base-100 shadow-xl flex-grow">
                    <figure className="p-5">
                        <img
                            src={winter1}
                            alt="needy people"
                            className="rounded-md h-[250px] w-full object-cover" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Donate Winter Essentials</h2>
                        <p>Share your unused winter clothes, blankets, and other warm essentials. Simply log in, browse ongoing donation campaigns, and use our donation form to contribute.</p>
                        <div className="card-actions justify-start">
                            <Link to='/donation-campaigns' className="btn bg-primary">Donate Now</Link>
                        </div>
                    </div>
                </div>

                {/* card-2 */}
                <div className="card bg-base-100 shadow-xl flex-grow">
                    <figure className="p-5">
                        <img
                            src={winter2}
                            alt="needy people"
                            className="rounded-md h-[250px] w-full object-cover" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Volunteer with Us</h2>
                        <p>Join our team of dedicated volunteers who work tirelessly to distribute donations to those who need them most. Whether you&apos;re in a city or a rural area, your efforts can make a real difference.</p>
                        <div className="card-actions justify-start">
                            <Link to='/donation-campaigns' className="btn bg-primary">Donate Now</Link>
                        </div>
                    </div>
                </div>

                {/* card-3 */}
                <div className="card bg-base-100 shadow-xl flex-grow">
                    <figure className="p-5">
                        <img
                            src={winter3}
                            alt="needy people"
                            className="rounded-md h-[250px] w-full object-cover" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Spread the Word</h2>
                        <p>Help us reach more people by sharing our mission on social media and with friends and family. Your voice can inspire others to join this cause.</p>
                        <div className="card-actions justify-start">
                            <Link to='/donation-campaigns' className="btn bg-primary">Donate Now</Link>
                        </div>
                    </div>
                </div>
            </div>



        </div>




    );
};

export default About;

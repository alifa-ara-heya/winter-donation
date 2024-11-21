import { Link } from 'react-router-dom';
import winter5 from '../assets/winter-5.jpg'
import Heading from '../components/Heading/Heading';
import { AiFillHome } from 'react-icons/ai';
const HowToHelp = () => {
    return (
        <div className="w-11/12 mx-auto md:p-20 p-10 max-w-[1440px]">
            {/* Collection Points */}
            <Heading title="How It Works" subtitle='Donating through WinterAid is simple!' />

            <div className="my-12">
                <figure className=' rounded-md md:w-1/2 mx-auto'><img src={winter5} alt="" className='rounded-md w-full ' />
                    <figcaption className='text-center py-3 text-gray-500 capitalize italic'>Let&apos;s bring smile to these faces</figcaption>
                </figure>

                <div className='md:p-32 md:py-10 space-y-10'>
                    {/* steps to donate */}
                    <div className="my-6">
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
                    <h2 className="text-xl font-semibold text-lime-800 my-4">Collection Points</h2>
                    <ul className="list-disc list-inside space-y-3 text-gray-700 px-6">
                        <li>
                            <strong>Dhaka Division:</strong> Gulshan Community Center, Dhanmondi Collection Hub
                        </li>
                        <li>
                            <strong>Chittagong Division:</strong> Agrabad Donation Center
                        </li>
                        <li>
                            <strong>Sylhet Division:</strong> Zindabazar Central Point
                        </li>
                        <li>
                            <strong>Rajshahi Division:</strong> Rajshahi City Office
                        </li>
                    </ul>

                    {/* Supported Divisions */}
                    <div>
                        <h2 className="text-xl font-semibold text-lime-800 mb-4">Supported Divisions</h2>
                        <ul className="list-none grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 px-10">
                            <li className="flex items-center gap-2">
                                <AiFillHome color='#a4cc6f' size={20} /> <span>Dhaka</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <AiFillHome color='#a4cc6f' size={20} /><span>Chittagong</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <AiFillHome color='#a4cc6f' size={20} />
                                <span>Sylhet</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <AiFillHome color='#a4cc6f' size={20} />
                                <span>Rajshahi</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <AiFillHome color='#a4cc6f' size={20} /><span>Khulna</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <AiFillHome color='#a4cc6f' size={20} /> <span>Barisal</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <AiFillHome color='#a4cc6f' size={20} /> <span>Rangpur</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <AiFillHome color='#a4cc6f' size={20} /><span>Mymensingh</span>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default HowToHelp;
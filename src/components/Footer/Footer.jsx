import { Link } from 'react-router-dom';
import footerDraw from '../../assets/donation-box.png'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {

    return (
        <footer className='bg-[#a4cc6f]'>
            <section className=" text-black p-16  md:text-center max-w-5xl mx-auto">

                {/* Footer heading */}
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold ">Winter Aid</h2>
                    <p className="opacity-60 font-medium  md:mx-auto">Bringing Comfort to Those Who Need It Most.</p>
                </div>

                <div className="footer md:items-center justify-between">
                    <img className='h-56 -ml-8 -mb-5 md:-mb-0 md:-ml-0' src={footerDraw} alt="" />

                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                        <a className="link link-hover">Company policy</a>
                    </nav>
                </div>
                <div className='divider'></div>
                <p className='mb-10 opacity-25 text-sm'>Copyright © {new Date().getFullYear()} - All right reserved- Alifa Ara Heya</p>
                <div className='flex items-center justify-center gap-8 opacity-40'>
                    <a href="https://facebook.com">
                        <FaFacebook size={28} />
                    </a>
                    <a href="https://instagram.com">
                        <FaInstagram size={28} />
                    </a>
                    <a href="https://youtube.com">
                        <FaYoutube size={28} />
                    </a>
                </div>
            </section>

        </footer >
    );
};

export default Footer;
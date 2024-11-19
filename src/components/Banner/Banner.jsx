import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import './Banner.css'

import banner1 from '../../assets/banner-1.jpg';
import banner2 from '../../assets/banner-2.jpg';
import banner3 from '../../assets/banner-3.jpg';
import banner4 from '../../assets/banner-4.jpg';
import banner5 from '../../assets/banner-5.jpg';
import banner6 from '../../assets/banner-6.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="w-full h-[500px]"
        >
            <SwiperSlide>
                <div
                    className="relative w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${banner1})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h2 className="text-white text-4xl font-medium opacity-80 text-center">
                            Welcome to <br />WinterAid
                        </h2>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="relative w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${banner2})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h2 className="text-white text-4xl font-medium text-center">
                            Donate Warmth, <br />Spread Love
                        </h2>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="relative w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${banner3})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h2 className="text-white text-4xl font-medium text-center">
                            Make a Difference <br /> This Winter
                        </h2>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="relative w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${banner4})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h2 className="text-white text-4xl font-medium text-center">
                            Join <br />Our Mission
                        </h2>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="relative w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${banner5})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h2 className="text-white text-4xl font-medium text-center">
                            Together,<br /> We Can Do More
                        </h2>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="relative w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${banner6})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h2 className="text-white text-4xl font-medium text-center">
                            Support Those <br /> in Need
                        </h2>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;

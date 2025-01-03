import React from "react";
import Slider from "react-slick";
import { MIN_SLIDER_LIST, SLIDER_LIST } from "../utils/helper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const CarouselCraft = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, 

        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="bg-primary min-h-screen pt-20" >
            <h2 className="text-white lg:mb-10 mb-7 text-3xl text-center mx-auto">Responsive Slider</h2>
            <div className="max-w-[1420px] mx-auto">
                <Slider {...settings}>
                    {SLIDER_LIST.map((obj) => (
                        <div key={obj.id}>
                            <div className="lg:px-5 px-3 bg-[#e8e8e4] xl:max-w-[450px] lg:max-w-[484px] md:max-w-[355px] max-w-sm w-full lg:pt-5 pt-4 pb-7  border border-[#ddd] rounded-lg text-center">
                                <h3 className="text-2xl font-semibold mb-2">{obj.title}</h3>
                                <p className="text-sm text-[#555] lg:mb-4 mb-3">{obj.description}</p>
                                <p className="text-sm text-[#555] lg:mb-4 mb-3 px-3">{obj.descriptionTwo}</p>
                                <div className=" max-sm:max-w-[320px] overflow-hidden max-sm:mx-auto">
                                    <Swiper
                                        modules={[Navigation, Pagination, Autoplay]}
                                        pagination={{ clickable: true }}
                                        autoplay={{ delay: 1000 }}
                                        loop={true}
                                        spaceBetween={20}
                                        slidesPerView={1}

                                        breakpoints={{
                                            1024: {
                                                slidesPerView: 3,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                            },

                                            480: {
                                                slidesPerView: 1,
                                            },
                                        }}>
                                        {MIN_SLIDER_LIST.map((obj) => (
                                            <SwiperSlide key={obj.id} className="flex flex-col justify-center items-center bg-white border border-[#ddd] rounded-lg max-h-28 min-h-28 p-2 shadow-md">
                                                <h3 className="text-lg font-semibold mb-2">{obj.title}</h3>
                                                <p className="text-sm text-[#555]">{obj.description}</p>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div >
        </div >
    );
}


export default CarouselCraft









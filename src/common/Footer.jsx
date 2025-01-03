{/* <Swiper
modules={[Navigation, Pagination, Autoplay]}
pagination={{ clickable: true }}
// autoplay={{ delay: 3000 }}
loop={true}
spaceBetween={20}
slidesPerView={1}
    centeredSlides={true}

breakpoints={{
    1024: {
        slidesPerView: 3,
    },
    768: {
        slidesPerView: 2,
    },

    480: {
        slidesPerView: 1,
        centeredSlides: true,
    },
}}>
{MIN_SLIDER_LIST.map((obj) => (
    <SwiperSlide key={obj.id} className="flex flex-col justify-center   items-center bg-[#f5f5f5] border border-[#ddd] rounded-lg max-h-28 min-h-28 p-2 shadow-md">
        <h3 className="text-lg font-semibold mb-2">{obj.title}</h3>
        <p className="text-sm text-[#555]">{obj.description}</p>
    </SwiperSlide>
))}
</Swiper> */}
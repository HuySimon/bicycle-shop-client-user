import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CarouselSlider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
                delay: 2500, // 2.5 seconds
                disableOnInteraction: false, // Keep autoplay running even when user interacts with the carousel
            }}
            loop={true}
        >
            <SwiperSlide>
                <img src="src/assets/01 copy.jpg" alt="" style={{ width: '100%' }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="src/assets/02 copy.jpg" alt="" style={{ width: '100%' }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="src/assets/03 copy.jpg" alt="" style={{ width: '100%' }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="src/assets/04 copy.jpg" alt="" style={{ width: '100%' }} />
            </SwiperSlide>
        </Swiper>
    );
};

export default CarouselSlider;

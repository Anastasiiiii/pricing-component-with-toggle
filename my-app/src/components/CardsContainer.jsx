import React, { useRef, useState } from "react";
import Card from "./Card";
import "../styles/CardsContainer.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const CardsContainer = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const cardData = [
        {
            name: "Basic",
            cost: 199.99,
            texts: ["500Gb Storage", "2 Users Allowed", "Send up to 3GB"]
        },
        {
            name: "Professional",
            cost: 249.99,
            texts: ["1TB Storage", "5 Users Allowed", "Send up to 10GB"]
        },
        {
            name: "Master",
            cost: 399.99,
            texts: ["2TB Storage", "10 Users Allowed", "Send up to 20GB"]
        }
    ];

    const handleCardClick = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index);
        }
    }

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    const setInitialSlide = (swiper) => {
        const middleIndex = Math.floor(cardData.length / 2);
        swiper.slideToLoop(middleIndex);
    }

    return (
        <div className="all-cards-container">
            <Swiper
                effect={'coverflow'}
                grapCursor={false}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true
                }}
                allowTouchMove={false}
                pagination={false}
                onSwiper={(swiper) => { swiperRef.current = swiper; setActiveIndex(swiper.realIndex); setInitialSlide(swiper) }}
                onSlideChange={handleSlideChange}
                modules={[EffectCoverflow, Pagination]}
            >
                {cardData.map((data, index) => (
                    <SwiperSlide key={index} className="swiper-slide" onClick={() => handleCardClick(index)}>
                        <Card
                            name={data.name}
                            cost={data.cost}
                            texts={data.texts}
                            backgroundColor={index === activeIndex ? "hsl(237, 63%, 64%)" : "white"}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CardsContainer;

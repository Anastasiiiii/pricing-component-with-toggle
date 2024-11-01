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
import Toggle from "./Toggle";

const CardsContainer = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [period, setPeriod] = useState(false);

    const cardData = [
        {
            name: "Basic",
            cost: period ? 19.99 : 199.99,
            texts: ["500Gb Storage", "2 Users Allowed", "Send up to 3GB"]
        },
        {
            name: "Professional",
            cost: period ? 24.99 : 249.99,
            texts: ["1TB Storage", "5 Users Allowed", "Send up to 10GB"]
        },
        {
            name: "Master",
            cost: period ? 39.99 : 399.99,
            texts: ["2TB Storage", "10 Users Allowed", "Send up to 20GB"]
        }
    ];

    const toggleChangePricePeriod = () => {
        if (!period) {
            setPeriod(true);
        } else {
            setPeriod(false);
        }
    }

    const handleCardClick = (index) => {
        if (index !== activeIndex) {
            if (swiperRef.current) {
                swiperRef.current.slideToLoop(index);
            }
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
            <div className="toggle-button-box">
                <Toggle toggleChangePricePeriod={toggleChangePricePeriod} />
            </div>
            <Swiper
                effect={'coverflow'}
                grapCursor={false}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                spaceBetween={130}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 150,
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
                            backgroundColor={index === activeIndex ? "var(--card-bg-selected)" : "var(--card-bg)"}
                            textColor={index == activeIndex ? "var(--text-color-selected" : "var(--text-color)"}
                            buttonBg={index == activeIndex ? "var(--button-bg-selected)" : "var(--button-bg)"}
                            buttonTextColor={index == activeIndex ? "var(--button-text-color-selected" : "var(--button-text-color)"}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CardsContainer;

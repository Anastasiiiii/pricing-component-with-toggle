import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";
import "../styles/CardsContainer.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Toggle from "./Toggle";

const CardsContainer = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [period, setPeriod] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

    //Card data
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

    //Toggle to change the prices based on the period
    const toggleChangePricePeriod = () => {
        setPeriod(!period);
    };

    //function to change slides with a click
    const handleCardClick = (index) => {
        if (index !== activeIndex) {
            if (swiperRef.current) {
                swiperRef.current.slideToLoop(index);
            }
        }
    };

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    const setInitialSlide = (swiper) => {
        const middleIndex = Math.floor(cardData.length / 2);
        swiper.slideToLoop(middleIndex);
    };

    //Find a middle slide
    const middleIndex = Math.floor((cardData.length - 1) / 2);

    //UseEffect to change cards place with window resizing 
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 500);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="all-cards-container">
            <div className="toggle-button-box">
                <Toggle toggleChangePricePeriod={toggleChangePricePeriod} />
            </div>
            {isMobile ? (
                <div className="card-list">
                    {cardData.map((data, index) => (
                        <Card
                            key={index}
                            name={data.name}
                            cost={data.cost}
                            texts={data.texts}
                            backgroundColor={index === middleIndex ? "var(--card-bg-selected)" : "var(--card-bg)"}
                            textColor={index === middleIndex ? "var(--text-color-selected)" : "var(--text-color)"}
                            buttonBg={index === middleIndex ? "var(--button-bg-selected)" : "var(--button-bg)"}
                            buttonTextColor={index === middleIndex ? "var(--button-text-color-selected)" : "var(--button-text-color)"}
                            hoverColor={index === activeIndex ? "var(--button-text-color)" : "var(--button-text-color-selected"}
                            border={index === activeIndex ? "1px solid white" : "1px solid hsl(237, 63%, 64%)"}
                        />
                    ))}
                </div>
            ) : (
                <Swiper
                    effect={'coverflow'}
                    grabCursor={false}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={130}
                    speed={500}
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
                                textColor={index === activeIndex ? "var(--text-color-selected)" : "var(--text-color)"}
                                buttonBg={index === activeIndex ? "var(--button-bg-selected)" : "var(--button-bg)"}
                                buttonTextColor={index === activeIndex ? "var(--button-text-color-selected)" : "var(--button-text-color)"}
                                hoverColor={index === activeIndex ? "var(--button-text-color)" : "var(--button-text-color-selected"}
                                border={index === activeIndex ? "1px solid white" : "1px solid hsl(237, 63%, 64%)"}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default CardsContainer;

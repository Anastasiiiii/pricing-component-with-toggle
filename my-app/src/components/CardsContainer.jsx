import React from "react";
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

    return (
        <div className="all-cards-container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 150,
                    modifier: 2.5,
                    slideShadows: true,
                }}
                autoplay = {{
                    delay: 3000,
                    disableOnInteraction: false
                }}
            >
                {cardData.map((data, index) => (
                    <SwiperSlide key={index}> {/* Added a key prop */}
                            <Card
                                name={data.name}
                                cost={data.cost}
                                texts={data.texts}
                            />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CardsContainer;

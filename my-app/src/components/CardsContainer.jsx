import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'; // Import modules from swiper/modules
import "../styles/CardsContainer.css";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {cardData.map((data, index) => (
                    <SwiperSlide key={index}>
                        <Card
                            name={data.name}
                            cost={data.cost}
                            texts={data.texts} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CardsContainer;

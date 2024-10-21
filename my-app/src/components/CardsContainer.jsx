import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import { Navigation, Pagination } from 'swiper/modules'; // Import navigation and pagination modules
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/TripleSlider.css'; // Add your custom styles

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
                slidesPerView={3}  // Показує 3 слайди одночасно
                spaceBetween={5}  // Відстань між слайдами
                loop={true}        // Увімкнення циклічної прокрутки
                navigation         // Увімкнення стрілок для навігації
                pagination={{ clickable: true }}  // Увімкнення пагінації
                modules={[Navigation, Pagination]}  // Підключення необхідних модулів
                className="swiper-container"
            >
                {cardData.map((data, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
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

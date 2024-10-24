import React from "react";
import { useState } from "react";
import Card from "./Card";
import "../styles/CardsContainer.css"

const CardsContainer = () => {
    const [activeIndex, setActiveIndex] = useState(0);

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

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
        )
    }

    const goToPrevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
        )
    }

    return (
        <div className="all-cards-container">
            <button className="prev-btn" onClick={goToPrevSlide}>
                &lt;
            </button>
            <div className="card-wrapper">
                {cardData.map((data, index) => {
                    let position = "next-slide";

                    if (index === activeIndex) {
                        position = "active-slide";
                    } else if (index === activeIndex - 1 || (activeIndex === 0 && index === cardData.length - 1)) {
                        position = "prev-slide";
                    }
                    return (
                        <div key={index}
                            className={`cart-item  ${position}`}>
                            <Card
                                name={data.name}
                                cost={data.cost}
                                texts={data.texts} />
                        </div>
                    )
                })}
            </div>
            <button className="next-btn" onClick={goToNextSlide}>
                &gt;
            </button>

            {/* Пагінація */}

            <div className="pagination">
                {cardData.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === activeIndex ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardsContainer;

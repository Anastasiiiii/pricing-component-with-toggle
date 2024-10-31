import React from "react";
import "../styles/Card.css";
import "../styles/Formulas.css";

const Card = ({ name, cost, texts, backgroundColor }) => {
    const renderTextItems = (texts) => {
        return texts.map((text, index) => {
            return <div className="info-box" key={index}>{text}</div>;
        });
    };

    return (
        <div className="card-container" style={{ backgroundColor: backgroundColor }}>
            <div className="cost-container">
                <p id="name">{name}</p>
                <span id="cost-container">
                    ${<span id="cost">{cost}</span>}
                </span>
            </div>
            <div className="text-container">
                {renderTextItems(texts)}
            </div>
            <div className="learn-more-button">
                <button>LEARN MORE</button>
            </div>
        </div>
    );
};

export default Card;

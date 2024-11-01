import React, { useState } from "react";
import "../styles/Card.css";
import "../styles/Formulas.css";

const Card = ({ name, cost, texts, backgroundColor, textColor, buttonBg, buttonTextColor, hoverColor, border }) => {
    const [isHover, setIsHover] = useState(false);

    const renderTextItems = (texts) => {
        return texts.map((text, index) => {
            return <div className="info-box" key={index}>{text}</div>;
        });
    };

    //Button styles
    const buttonStyle = {
        background: isHover ? "transparent" : buttonBg,
        color: isHover ? hoverColor : buttonTextColor,
        border: isHover ? border : "none"
    };

    return (
        <div className="card-container" style={{ background: backgroundColor }}>
            <div className="cost-container">
                <p id="name" style={{ color: textColor }}>{name}</p>
                <span id="cost-container" style={{ color: textColor }}>
                    ${<span id="cost">{cost}</span>}
                </span>
                <div className="text-container" style={{ color: textColor }}>
                    {renderTextItems(texts)}
                    <button
                        className="learn-more-button"
                        style={buttonStyle}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;

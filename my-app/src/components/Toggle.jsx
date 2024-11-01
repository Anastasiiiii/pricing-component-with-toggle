import React from "react";
import "../styles/Toggle.css";
import "../styles/Formulas.css";

const Toggle = ({ toggleChangePricePeriod }) => {
    return (
        <div className="toggle-main-div">
            <h1>Our Pricing</h1>
            <div className="toggle-button-container">
                <p>Annually</p>
                <input id="mode-toggle" type="checkbox" onClick={toggleChangePricePeriod}></input>
                <label htmlFor="mode-toggle"></label>
                <p>Monthly</p>
            </div>
        </div>

    )
}

export default Toggle;
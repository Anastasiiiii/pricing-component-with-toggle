import React from "react";
import "../styles/Toggle.css";

const Toggle = ({ toggleChangePricePeriod }) => {
    return (
        <div className="toggle-button-container">
            <p>Annually</p>
            <input id="mode-toggle" type="checkbox" onClick={toggleChangePricePeriod}></input>
            <label htmlFor="mode-toggle">Monthly</label>
        </div>
    )
}

export default Toggle;
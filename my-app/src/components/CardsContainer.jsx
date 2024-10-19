import React from "react";
import Card from "./Card";

const CardsContainer = () => {
    return(
        <div>
            <Card
            name = "Professional"
            cost = "249.99"
            texts = {["1TB Storage", "5 Users Allowed", "Send up to 10GB"]} />
        </div>
    )
}

export default CardsContainer;
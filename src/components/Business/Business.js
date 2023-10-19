import React from "react";
import './Business.css';

const Business = ( {business} ) => {
    return (
        <div className="business-card">
            <img src={business.image} alt={business.name} />
            <h2>{business.name}</h2>
            <div className="business-card-information">
                <div className="business-card-address">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.zipCode}</p>
                </div>
                <div className="business-card-reviews">
                    <h3>{business.category}</h3>
                    <p>{`${business.rating} stars`}</p>
                    <p>{`${business.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    );
};

export default Business;

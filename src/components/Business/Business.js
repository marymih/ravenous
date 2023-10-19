import React from "react";
import './Business.css';

const business = {
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/3gXze2PDYYdAtuAYTj70ng/348s.jpg',
    name: 'JOSEPH',
    address: 'Friedrichstr. 113',
    city: 'Berlin',
    zipCode: '10117',
    category: 'Israeli',
    rating: 4.3,
    reviewCount: 6
};

const Business = () => {
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

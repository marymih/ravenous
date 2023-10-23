import React from "react";
import "./App.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

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

const businesses = [business, business, business, business, business, business];

const App = () => {
    const searchYelp = (search, location, sortBy) => {
        console.log(`Searching Yelp with ${search}, ${location}, ${sortBy}`);
    };

    return (
        <div className="container">
            <header>
                <h1>Ravenous</h1>
            </header>
            <main>
                <SearchBar searchYelp={searchYelp} />
                <BusinessList businesses={businesses} />
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default App;

import React, { useState } from "react";
import "./App.css";

import requestYelp from "../../utils/yelp_api";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {

    const [businesses, setBusinesses] = useState([]);

    const searchYelp = async (search, location, sortBy) => {
        const businesses = await requestYelp(search, location, sortBy);
        setBusinesses(businesses);
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


// Make addresses clickable and have them open the address in Google Maps in a new tab.
// Make images clickable and have them open the business’ website in a new tab.
// Clicking on a different sorting option automatically re-queries the Yelp API, rather than having to manually click “Let’s Go” again.
// Implement your own type of sort (for example, by entering a distance or radius from a central location).
// Allow you to search by pressing “Enter” (or “Return”) on your keyboard, as opposed to manually clicking.
// Add autocompletion of addresses to the “Location” input.

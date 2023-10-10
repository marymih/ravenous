import React from "react";
import './SearchBar.css';

const tabs = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};



const SearchBar = () => {
    const renderTabs = () => {
        return Object.keys(tabs).map((tab) => {
            let tabValue = tabs[tab];
            return <li key={tabValue}>{tab}</li>;
        });
    };

    return (
        <div className="search-section">
            <div className="search-tabs">
                <ul>{renderTabs()}</ul>
            </div>
            <div className="search-inputs">
                <input type="text" placeholder="Search Business" className="search-input"/>
                <input type="text" placeholder="Where?" className="search-input" />
            </div>
            <button type="submit">Let's Go</button>
        </div>
    );
};

export default SearchBar;

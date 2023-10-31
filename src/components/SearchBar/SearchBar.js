import React, {useState} from "react";
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

const SearchBar = ({ searchYelp }) => {
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
    const [status, setStatus] = useState('search-input');
    const [sortBy, setSortBy] = useState('best_match');

    const getSortByClass = (sortByOption) => {
        if (sortBy === sortByOption) {
            return "active";
        }
        return "";
    };

    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption);
    };

    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
        setStatus("search-input");
    };

    const handleChangeLocation = (event) => {
        setLocation(event.target.value);
        setStatus("search-input");
    };

    const handleSearch = (event) => {
        event.preventDefault();
        if (search && location && sortBy) {
            searchYelp(search, location, sortBy);
        } else {
            setStatus("search-input error");
        }
    };

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li
                    className={getSortByClass(sortByOptionValue)}
                    key={sortByOptionValue}
                    onClick={() => handleSortByChange(sortByOptionValue)}>
                {sortByOption}
                </li>
            );
        });
    };

    return (
        <div className="search-section">
            <div className="search-tabs">
                <ul>{renderSortByOptions()}</ul>
            </div>
            <form onSubmit={handleSearch}>
                <div className="search-inputs">
                    <input type="text" placeholder="Search Business" className={status} onChange={handleChangeSearch} />
                    <input type="text" placeholder="Where?" className={status} onChange={handleChangeLocation} />
                </div>
                <button type="submit">Let's Go</button>
            </form>
        </div>
    );
};

export default SearchBar;

import React from "react";
import "./App.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {
    return (
        <div className="container">
            <header>
                <h1>Ravenous</h1>
            </header>
            <main>
                <SearchBar />
                <BusinessList />
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default App;

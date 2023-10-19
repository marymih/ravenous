import React from "react";
import './BusinessList.css';

import Business from "../Business/Business";


const BusinessList = ( {businesses} ) => {
    return (
        <div className="business-list">
            {businesses.map((business) => {
                return <Business business={business} key={business.name} />
            })}
        </div>
    );
};

export default BusinessList;

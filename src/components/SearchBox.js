import React from "react";

const SearchBox = ({ searchfiled , searchChange }) => {
    return(
        <div className="pd2">
            <input
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="search robot"
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox
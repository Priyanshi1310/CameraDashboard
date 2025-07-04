import React from "react";

const SearchBar = ({searchTerm, onSearch}) =>(
    <input
        type="text"
        placeholder="Search Cameras..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        style={{padding:"8px", width:"250px", marginRight:"10px"}}
    />
)

export default SearchBar;
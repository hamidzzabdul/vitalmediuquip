
import { FaSearch } from "react-icons/fa"
import Filter from "../Common/Filter";
import { useState } from "react";
import "./SearchAndFilter.scss"

const SearchAndFilter = ({ onSearch, numberOfProducts }) => {
    const [searchText, setSearchText] = useState("")

    const handleOnchange = (e) => {
        const text = e.target.value;
        setSearchText(text)
        onSearch(text)
    }
    return (
        <div className="category-section">
            <p>Showing {numberOfProducts} Products</p>
            <Filter />
            <div className="search-bar">
                <div className="input-container">
                    <input type="text" placeholder="search..." onChange={handleOnchange} value={searchText} />
                    <FaSearch className="search-icon" />
                </div>
            </div>
        </div>
    )
}

export default SearchAndFilter
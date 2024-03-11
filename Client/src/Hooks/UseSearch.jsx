import { useState } from "react";

export function useSearch(initialValue = "") {
    const [searchText, setSearchText] = useState(initialValue);

    const handleSearch = (text) => {
        setSearchText(text);
    };

    return {
        searchText,
        handleSearch,
    };
}
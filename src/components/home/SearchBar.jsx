// src/components/SearchBar.jsx
import { useState } from "react";

function SearchBar({ onSearchChange, initialValue = "" }) {
    const [searchTerm, setSearchTerm] = useState(initialValue);

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setSearchTerm(newValue);
        if (onSearchChange) {
            onSearchChange(newValue);
        }
    };

    return (
        <div className="relative">
            <input
                type="text"
                name="search"
                className="w-[300px] pl-3 pr-4 py-2 border border-gray-300 rounded-md text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-350 ease-in-out search-input"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />

            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none search-icon">
                <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
}

export default SearchBar;

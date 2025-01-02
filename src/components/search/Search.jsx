import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL , geoApiOptions } from "../../api";
import "./Search.css";

const Search = ({onSearchChange}) => {

    const [search , setSearch] = useState(null);
     
    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(response => {
                if (!response.data) {
                    throw new Error("No data found");
                }
                return {
                    options: response.data.map((city) => ({
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    })),
                };
            })
            .catch(err => console.error("Error loading options:", err));
    };
    

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    
    return (
       <AsyncPaginate
          placeholder="Search for the cities"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        id="serach-bar"
        />
    );
}

export default Search;
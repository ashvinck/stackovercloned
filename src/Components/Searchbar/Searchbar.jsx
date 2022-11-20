import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from '../../features/Questions/questionSlice';
import "./Searchbar.css";


const Searchbar = () => {

    const dispatch = useDispatch();
    const data = useSelector(selectData);

    const [results, setSearchResults] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleSearchChange = (e) => {
        if (!e.target.value) return
        setSearchResults(data)

        const resultsArray = data.filter(res => res.includes(e.target.value));
        setSearchResults(resultsArray)
    }


    return (
        <div className="form-group SearchbarContainer" onSubmit={handleSubmit}>
            <div className="SearchIcon">
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <input type="text" className="Input d-none d-md-block d-lg-block" placeholder="Search..." onChange={handleSearchChange} />
        </div>
    )
}
export default Searchbar;
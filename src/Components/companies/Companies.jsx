import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Companies.css";
import { faBuilding, faLocationDot, faLocationPin, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { API } from '../../Global';



export const Jobs = (props) => {

    const [viewJobs, setViewJobs] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    // For API GET responses
    const getJobs = () => {
        fetch(`${API}/jobs`, {
            method: "GET",
            type: 'cors',
        })
            .then(res => res.json())
            .then((companies) => setViewJobs(companies))
    }

    useEffect(() => getJobs(), []);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== "") {
            const filteredData = viewJobs.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredData(filteredData)
        }
        else {
            setFilteredData(viewJobs)
        }
    }

    // console.log(viewJobs);


    return (
        <div className='companies-container'>
            <div className='Mainbar col'>
                <div className='Topbarq'>
                    <div className='row Mainr1'>
                        <h2 className='title'>Companies</h2>
                    </div>
                    <div className='row Mainr2'>
                        <h6>Learn about what it's like to work at companies</h6>
                    </div>
                    <div className='Search-container col-12'>
                        <div className='row searchr'>
                            <div className="col-3">
                                <div className="form-group SearchbarContainer">
                                    <div className="SearchIcon">
                                        <Link className='Searchlink'> <FontAwesomeIcon icon={faSearch} /></Link>
                                    </div>
                                    <input type="text" className="Input" placeholder="Search all companies" onChange={(e) => searchItems(e.target.value)} />
                                </div>
                            </div>

                            {/* <div className='Searchbtn col-3'>
                                <button className='searchbtn'>Search</button>
                            </div> */}
                        </div>
                    </div>
                </div>

                {searchInput.length > 1 ? (
                    filteredData?.map((data) => (
                        <div className='Companydetails-container' key={data?.id}>
                            {console.log(data)}
                            <div className='row jdr1'>
                                <div className='CompanyLogo col-2 d-none d-sm-none d-md-block '>
                                    <a href={data?.carrerUrl}><img alt="Companies_logo" src={data?.companylogo} width="100" height="100" /></a>
                                </div>
                                <div className='Companydetails col-10'>
                                    <div className='row Qr5'>
                                        <div className='Jobs-Title col-12'>
                                            <a href={data?.careerUrl} className='jobsLink'>{data?.name}</a>
                                        </div>
                                        <div className="location">
                                            <FontAwesomeIcon icon={faLocationDot} />&nbsp;{data?.location} &nbsp; &nbsp;<FontAwesomeIcon icon={faBuilding} />&nbsp; {data?.type}
                                        </div>
                                    </div>
                                    <div className='row Qr6'>
                                        <div className='Que-Body col-12'>
                                            {/* {parser(`${question?.description}`)} */}
                                            {data?.description}
                                        </div>
                                    </div>
                                    {data?.tags?.map((tag) => (
                                        <div className='Que-tags'>
                                            <button className='Tagbtn' >{tag}</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    viewJobs.map((data) => (
                        <div className='Companydetails-container' key={data?.id}>
                            <div className='row jdr1'>
                                <div className='CompanyLogo col-2 d-none d-sm-none d-md-block '>
                                    <a href={data?.carrerUrl}><img alt="Companies_logo" src={data?.companylogo} width="100" height="100" /></a>
                                </div>
                                <div className='Companydetails col-10'>
                                    <div className='row Qr5'>
                                        <div className='Jobs-Title col-12'>
                                            <a href={data?.careerUrl} className='jobsLink'>{data?.name}</a>
                                        </div>
                                        <div className="location">
                                            <FontAwesomeIcon icon={faLocationDot} />&nbsp;{data?.location} &nbsp; &nbsp;<FontAwesomeIcon icon={faBuilding} />&nbsp; {data?.type}
                                        </div>
                                    </div>
                                    <div className='row Qr6'>
                                        <div className='Que-Body col-12'>
                                            {/* {parser(`${question?.description}`)} */}
                                            {data?.description}
                                        </div>
                                    </div>
                                    {data?.tags?.map((tag) => (
                                        <div className='Que-tags'>
                                            <button className='Tagbtn' >{tag}</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>

    )
}
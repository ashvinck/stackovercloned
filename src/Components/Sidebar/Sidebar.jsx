import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faWpexplorer } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className="Sidebar">

            {/* Home */}
            <div className="Homeoption">
                <Link className="SideLink" to='/home'>
                    <div className="TextContainer">
                        Home
                    </div>
                </Link>
            </div>

            {/* Divisions */}
            <div className="ListContainer">
                {/* Public */}
                <div className="TextContainer">
                    <div className="Category">
                        Public
                    </div>
                </div>
                {/* Question */}
                <div className="ListItems">
                    <Link className="SideLink" to='/top-questions'>
                        <div className="TextContainer">
                            <FontAwesomeIcon icon={faEarthAmericas} />
                            <div className='Text'>
                                Questions
                            </div>
                        </div>
                    </Link>
                </div>
                {/* Tags */}
                <div className="ListItems">
                    <Link className="SideLink" to="/tags">
                        <div className="TextContainer">
                            <div className='Text1'>
                                Tags
                            </div>
                        </div>
                    </Link>
                </div>
                {/* Users */}
                <div className="ListItems">
                    <Link className="SideLink" to='/user'>
                        <div className="TextContainer">
                            <div className='Text1'>
                                Users
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            {/* Collectives */}
            <div className="ListContainer">
                <div className="TextContainer">
                    <div className="Category">
                        Collectives
                    </div>
                </div>
                {/* Explore Collectives */}
                <div className="ListItems">
                    <Link className="SideLink" to="/404">
                        <div className="TextContainer">
                            <FontAwesomeIcon icon={faWpexplorer} />
                            <div className='Text'>
                                Explore Collectives
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            {/* Find a Job */}
            <div className="ListContainer">
                <div className="TextContainer">
                    <div className="Category">
                        Find a Job
                    </div>
                </div>
                {/* Companies */}
                <div className="ListItems">
                    <Link className="SideLink" to='/jobs'>
                        <div className="TextContainer">
                            <div className='Text1'>
                                Companies
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
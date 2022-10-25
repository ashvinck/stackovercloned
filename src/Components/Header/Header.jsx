import React from 'react'
import './Header.css';
import Logolg from '../../Assets/images/logonew.png';
import Logosm from '../../Assets/images/stackoverflow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faInbox, faSearch, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faStackExchange } from '@fortawesome/free-brands-svg-icons';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';


const Header = (props) => {

    const user = useSelector(selectUser);

    return (
        // <div className="Header col-12">
        //     <div className="row r1">
        <div>

            {/* Navbar */}
            <nav className="navbar  navbar-fixed-top">

                {/* Left Side of Navbar */}
                <div className='Header-Left col-4 '>
                    <div className='Logo-wrapper'>
                        {/* Logo */}
                        {/* Logo for larger screens */}
                        <Link to='/'>
                            <img className='Logolg d-none d-md-block d-lg-block' src={Logolg} alt='logo' />
                            {/* Logo for smaller screens */}
                            <img className='Logosm d-sm-block d-md-none d-lg-none ' src={Logosm} alt='logo' />
                        </Link>
                    </div>
                    {/* NavLinks */}
                    <div className='NavLinks'>
                        <Link className='LinkNav' to='./'>
                            Products
                        </Link>
                    </div>
                </div>

                {/* Middle of the Navbar */}
                <div className='Header-Middle col-5'>
                    {/* Search bar */}
                    <div className="form-group SearchbarContainer ">
                        <div className="SearchIcon">
                            <Link className='Searchlink'> <FontAwesomeIcon icon={faSearch} /></Link>
                        </div>
                        <input type="text" className="Input d-none d-md-block d-lg-block" placeholder="Search..." />
                    </div>
                </div>

                {/* Right Side of Navbar */}
                <div className='Header-Right col-3'>
                    <div className='Action-container'>
                        {/* Avatar */}
                        <div className='Avatar'>
                            <Avatar name={user?.displayName} src={user?.photo} size="24" />
                        </div>
                        {/* Accessibility Links  */}
                        <div className='Links-wrapper'>
                            <ul className='UlList'>
                                <Link className='AccLink'>
                                    {/* Inbox */}
                                    <li className='Lists'>
                                        <FontAwesomeIcon icon={faInbox} />
                                    </li>
                                </Link>
                                {/* Achievements */}
                                <Link className='AccLink'>
                                    <li className='Lists'>
                                        <FontAwesomeIcon icon={faTrophy} />
                                    </li>
                                    {/* Help */}
                                </Link>
                                <Link className='AccLink'>
                                    <li className='Lists'>
                                        <FontAwesomeIcon icon={faCircleQuestion} />
                                    </li>
                                </Link>
                                {/* Stack Exchange */}
                                <li className='Lists' >
                                    <FontAwesomeIcon icon={faStackExchange} />
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
        // </div>

    )
}

export default Header;

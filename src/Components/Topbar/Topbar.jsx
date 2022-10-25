import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuToggle } from '../Hamburger menu/Menu';
import Logolg from '../../Assets/images/logonew.png';
import Logosm from '../../Assets/images/stackoverflow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faInbox, faRightFromBracket, faSearch, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faStackExchange } from '@fortawesome/free-brands-svg-icons';
import Avatar from 'react-avatar';
import Sidebar from '../Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../Firebase-auth';
import './Topbar.css';



const Topbar = (props) => {

    const [isOpen, setOpen] = useState(false);
    const user = useSelector(selectUser);


    const toggle = () => {
        setOpen(!isOpen)
    }

    return (
        <div className='Topbar-container'>
            {/* Navbar */}
            <nav className="navbar navbar-expand navbar-fixed-top">
                <div className="Togglemenu d-block d-sm-block d-md-none" >
                    <MenuToggle isOpen={isOpen} toggle={toggle} />
                    <div className='fix'>
                        {isOpen && <Sidebar />}
                    </div>

                </div>
                <div className='Logo-wrapper' title='Home'>
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
                {/* Search bar */}
                <div className="form-group SearchbarContainer ">
                    <div className="SearchIcon">
                        <Link className='Searchlink'> <FontAwesomeIcon icon={faSearch} /></Link>
                    </div>
                    <input type="text" className="Input d-none d-md-block d-lg-block" placeholder="Search..." />
                </div>
                <div className='Action-container'>
                    {/* Avatar */}
                    <div className='Avatar'>
                        <Link to='/user' className='AccLink' title='Profile'>
                            <Avatar name={user?.name} src={user?.photo} size="24" />
                        </Link>
                    </div>

                    {/* Accessibility Links  */}
                    <div className='Links-wrapper'>
                        <ul className='UlList'>
                            <Link className='AccLink'>
                                {/* Inbox */}
                                <li className='Lists' title='Inbox'>
                                    <FontAwesomeIcon icon={faInbox} />
                                </li>
                            </Link>
                            {/* Achievements */}
                            <Link className='AccLink'>
                                <li className='Lists' title='Achievements'>
                                    <FontAwesomeIcon icon={faTrophy} />
                                </li>
                            </Link>
                            {/* Stack Exchange */}
                            <Link className='AccLink'>
                                <li className='Lists' title='Stack-exchange' >
                                    <FontAwesomeIcon icon={faStackExchange} />
                                </li>
                            </Link>
                            {/* Logout */}
                            {user ?
                                <div className='Link1' onClick={() => { auth.signOut() }}>
                                    <li className='Lists1' title='Logout'>
                                        <div className='lgout btn'>
                                            <FontAwesomeIcon icon={faRightFromBracket} /><span><small>Logout</small></span>
                                        </div>
                                    </li>
                                </div>
                                :
                                <Link className='AccLink'>
                                    <li className='Lists' title='Help' >
                                        <FontAwesomeIcon icon={faCircleQuestion} />
                                    </li>
                                </Link>
                            }

                        </ul>
                    </div>
                </div>


            </nav>
        </div>
    )
}

export default Topbar
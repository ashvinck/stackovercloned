import React from 'react';
import Mainbar from '../../Components/Mainbar/Mainbar';
import Sidebar from '../../Components/Sidebar/Sidebar.jsx';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="HOme container-fluid">
            <div className='row tq1'>
                <div className='Sidebar-container d-none d-sm-none d-md-block '>
                    <Sidebar />
                </div>
                <div className='Mainbar-container'>
                    <Mainbar />
                </div>
            </div>
        </div>

    )
}

export default HomePage;
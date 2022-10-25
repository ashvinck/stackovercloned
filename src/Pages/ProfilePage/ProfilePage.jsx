import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar';
import Profilecard from '../../Components/ProfileCard/Profilecard.jsx'

const ProfilePage = () => {
    return (
        <div className='profile-page container-fluid'>
            <div className='row pp1'>
                <div className='Sidebar-container d-none d-sm-none d-md-block '>
                    <Sidebar />
                </div>
                <div className='Mainbar-container'>
                    <Profilecard />
                </div>
            </div>
        </div>

    )
}

export default ProfilePage;
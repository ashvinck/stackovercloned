import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import ViewQue from '../../Components/ViewQuestions/ViewQue';
import './ViewQuestions.css';

const ViewQuestions = () => {
    return (
        <div className="ViewQuestions container-fluid">
            <div className='row vq1'>
                <div className='Sidebar-container d-none d-sm-none d-md-block '>
                    <Sidebar />
                </div>
                <div className='ViewQuestions-container'>
                    <ViewQue />
                </div>
            </div>
        </div>
    )
}

export default ViewQuestions;
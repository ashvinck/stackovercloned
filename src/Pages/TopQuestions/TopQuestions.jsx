import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import TopQue from '../../Components/TopQuestions/TopQue';
import './TopQuestions.css';


const TopQuestions = () => {
    return (
        <div className="TopQuestion container-fluid">
            <div className='row tq1'>
                <div className='Sidebar-container d-none d-sm-none d-md-block '>
                    <Sidebar />
                </div>
                <div className='TopQuestions-container'>
                    <TopQue />
                </div>
            </div>
        </div>
    )
}

export default TopQuestions;
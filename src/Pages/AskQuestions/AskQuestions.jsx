import React from 'react'
import AskQue from '../../Components/AskQuestion/AskQue';
import './AskQuestions.css';

const AskQuestions = () => {
    return (
        <div className="AskQuestions container-fluid">
            <div className='AskQuestions'>
                <AskQue />
            </div>
        </div>
    )
}

export default AskQuestions;
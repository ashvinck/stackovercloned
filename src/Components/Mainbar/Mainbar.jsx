import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import QuestionsLayout from '../QuestionsLayout/Questionslayout';
import './Mainbar.css';

const Mainbar = (props) => {
    return (
        <div className='TopQue-container'>
            <div className='Mainbar'>
                <div className='Topbarq col-12'>
                    <div className='row Mainr1'>
                        <div className='allQuestions col-9'>
                            <h2 className='title'>All Questions</h2>
                        </div>
                        {/* Ask question Button */}
                        <div className='allQuestionsbtn col-3'>
                            <Link className='Mainlink' to="/add-question">
                                <button className='button1'>Ask Question</button>
                            </Link>
                        </div>
                    </div>
                    <div className='row Mainr2'>
                        <div className='Info col-12'>
                            <div className='QuestionSummary bg- col-6'>
                                <h5 className='summary'>Questions</h5>
                            </div>
                            <div className='Sort-container col-6'>
                                <div className='Sort-items'>
                                    <div className='Items'>
                                        <Link className='Mainlink' to='/'>Newest</Link>
                                    </div>
                                    <div className='Items'>
                                        <Link className='Mainlink' to='/'>Active</Link>
                                    </div>
                                    <div className='Items'>
                                        <Link className='Mainlink' to='/'>More</Link>
                                    </div>
                                </div>
                                <div className='Filter-container'>
                                    <div className='Filter'>
                                        <FontAwesomeIcon icon={faFilter} />
                                        <span>Filter</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Home page layout of questions*/}
                <QuestionsLayout />
            </div>
        </div>
    )
}

export default Mainbar;

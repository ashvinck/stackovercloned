import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import './QuestionsLayout.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, selectCount } from '../../features/counter/counterSlice';
import parser from 'html-react-parser';
import moment from 'moment';
import LoadAnim from "../../Assets/images/loadinggif.gif"
import { fetchAysncData } from '../../features/Questions/questionSlice';


const QuestionsLayout = (props) => {

    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.stackdata);

    const viewCount = useSelector(selectCount);
    useEffect(() => { dispatch(fetchAysncData()) }, [])

    if (loading) return <img src={LoadAnim} alt='loadinggif' />


    return (
        <div className="QuestionsLayout-container">

            {/* For lg and above screens */}
            {data?.map(({ question, answers, id }) => (
                <div className='QuestionsLayout d-none d-lg-block' key={id} id={id}>
                    <div className='Que-container'>

                        <div className='row'>
                            <div className='Que-Left col-2'>
                                <div className='row Qr2'>
                                    <p className='Que-info'> 0 votes</p>
                                </div>
                                <div className='row Qr3'>
                                    <p className='Que-info'>{answers?.length} {' '}answers</p>
                                </div>
                                <div className='row Qr4'>
                                    <p className='Que-info'> {viewCount} views</p>
                                </div>
                            </div>
                            <div className='Que-Right col-10'>
                                <div className='row Qr5'>
                                    <div className='Que-Title col-12'>
                                        <Link to={`/home/${id}`} onClick={() => dispatch(increment(id))} className='QueLink'>{question.heading} </Link>
                                    </div>
                                </div>
                                <div className='row Qr6'>
                                    <div className='Que-Body col-12'>
                                        {parser(`${question?.description}`)}
                                    </div>
                                </div>
                                {question?.tags?.map((tag, id) => (
                                    <div className='Que-tags' key={id}>
                                        <button className='Tagbtn' >{tag}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='row Qr7'>
                            <div className='Author col-12'>
                                <Avatar className='Avatar1' size='20' src={question?.user?.photo}></Avatar>
                                {question?.user?.displayName}
                                &nbsp;
                                &nbsp;
                                <span className='Timestamp'> asked {moment(question?.date).fromNow()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }

            {/* For screens lower than lg screens */}
            {
                data?.map(({ question, answers, id }) => (
                    <div className='QuestionsLayout d-lg-none' key={id}>
                        <div className='Que-container'>
                            <div className='row Qrsm1' >
                                <div className='InfoContainer'>
                                    <p> 0 votes</p>
                                    <p> {answers.length} {' '} answers</p>
                                    <p> {viewCount} views</p>
                                </div>
                            </div>
                            <div className='row Qrsm2'>
                                <div className='Queheading'>
                                    <Link className='QueLink' to={`/home/${id}`} onClick={() => dispatch(increment())}>
                                        <h6>{question?.heading}</h6>
                                    </Link>
                                </div>
                            </div>
                            <div className='row Qr6'>
                                <div className='Que-Body col-12'>
                                    {parser(`${question?.description}`)}
                                </div>
                            </div>
                            <div className='row Qrsm3'>
                                <div className='col'>
                                    {question?.tags?.map((tag, id) => (
                                        <div className='Quesm-tags' key={id}>
                                            <button className='Tagbtnsm'>{tag}</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='Authorsm col-12'>
                                <Avatar className='Avatar1' size='20' src={question?.user?.photo}></Avatar>
                                {question?.user?.displayName}
                                &nbsp;
                                &nbsp;
                                <span className='Timestamp'>{moment(question?.date).fromNow()}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default QuestionsLayout;
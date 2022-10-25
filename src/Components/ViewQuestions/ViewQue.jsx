import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Avatar from 'react-avatar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';

import './ViewQue.css';

const ViewQue = () => {

    const [show, setShow] = useState(false)


    return (
        <div className='ViewQue-container'>
            {/* Topbar containing question heading and askquestion button */}
            <div className='Topbarvw1 col-12'>
                <div className='row Mainr1'>
                    <div className='allQuestions col-9'>
                        <p className='title'> Question heading nsalncsdndcknsdkcnksncskdcnkslcnksdnckdsjdbcjkdbcjdbjcbds</p>
                    </div>
                    <div className='allQuestionsbtn col-3'>
                        <Link className='Mainlink' to="/add-question">
                            <button className='button1'>Ask Question</button>
                        </Link>
                    </div>
                </div>
                <div className='row Vqr2'>
                    <div className='Timeline'>
                        <p className='timeline' >Asked<span>7 years, 7 months ago</span></p>
                        <p className='timeline' >Modified <span>today</span></p>
                        <p className='timeline' >Viewed <span>34times</span></p>
                    </div>
                </div>
            </div>
            <div className='Answer-container'>
                <div className='Answer'>
                    <div className='row ansr1'>
                        <div className='Answer-left'>
                            <div className='UpArrow'>
                                <FontAwesomeIcon icon={faCaretUp} size='3x' />
                            </div>
                            <div className='Votecount'>
                                1234
                            </div>
                            <div className='DownArrow'>
                                <FontAwesomeIcon icon={faCaretDown} size='3x' />
                            </div>
                        </div>
                        <div className='Answer-right'>
                            <div className='Answer-body'>
                                this is the answer jsfjislfsks
                                snskds
                                ksncskncks
                                ksnkcnksncs
                                ksncknskcn
                                ksnkcnksncsksncs
                                ksncnskchjhgjgfngngbfgvbfghgfdghfgjfgngvbnvbnvhnhgmbnvnmbnm
                                sefgrfdhhtgfhgfhgmhj
                                fhfgjhgh
                                fghgbnhb
                                fhcng

                                <div className='Author'>
                                    <div className='small1'>
                                        asked
                                    </div>
                                    <div className="author-details">
                                        <div className="avatar">
                                            <Avatar size='14' />
                                        </div>
                                        Name
                                    </div>
                                </div>
                                <div className='Comment-container'>
                                    <div className='Comments'>
                                        <p className='Under-comments'> This is a comment
                                            <span> {' '}
                                                <Link className='User-link'> -Username</Link>
                                            </span>
                                            &nbsp;
                                            <small className='time-stamp'>
                                                &nbsp;
                                                Time stamp
                                            </small>
                                        </p>
                                    </div>
                                    <p className='Comment-text' onClick={() => setShow(!show)}>Add a comment</p>
                                    {
                                        show && (<div className="comment-title">
                                            <textarea
                                                type='text' placeholder='Add your comment' rows={5}
                                                style={{
                                                    margin: "5px 0px",
                                                    padding: "10px",
                                                    width: "100%",
                                                    border: "1px solid rgba(0, 0, 0, 0.2)",
                                                    borderRadius: "3px",
                                                    outline: "none",
                                                }}>
                                            </textarea>
                                            <div className="Add-cmnt">
                                                <button className='button1'>Add Comments</button>
                                            </div>
                                        </div>)
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='All-Answers'>
                    <p className='AnsHead'>No of answers</p>
                    <div className="All-answers-container">
                        <div className='row ansr1'>
                            <div className='Answer-left'>
                                <div className='UpArrow'>
                                    <FontAwesomeIcon icon={faCaretUp} size='3x' />
                                </div>
                                <div className='Votecount'>
                                    1234
                                </div>
                                <div className='DownArrow'>
                                    <FontAwesomeIcon icon={faCaretDown} size='3x' />
                                </div>
                            </div>
                            <div className='Answer-right'>
                                <div className='Answer-body'>
                                    this is the answer jsfjislfsks
                                    snskds
                                    ksncskncks
                                    ksnkcnksncs
                                    ksncknskcn
                                    ksnkcnksncsksncs
                                    ksncnskchjhgjgfngngbfgvbfghgfdghfgjfgngvbnvbnvhnhgmbnvnmbnm
                                    sefgrfdhhtgfhgfhgmhj
                                    fhfgjhgh
                                    fghgbnhb
                                    fhcng

                                    <div className='Author'>
                                        <div className='small1'>
                                            asked
                                        </div>
                                        <div className="author-details">
                                            <div className="avatar">
                                                <Avatar size='14' />
                                            </div>
                                            Name
                                        </div>
                                    </div>
                                    <div className='Comment-allans-container'>
                                        <div className='Comments-allAns'>
                                            <p className='Under-allAns-comments'> This is a comment
                                                <span> {' '}
                                                    <Link className='User-all-Anslink'> -Username</Link>
                                                </span>
                                                &nbsp;
                                                <small className='time-stamp'>
                                                    &nbsp;
                                                    Time stamp
                                                </small>
                                            </p>
                                        </div>
                                        <p className='Comment-text-allAns' onClick={() => setShow(!show)}>Add a comment</p>
                                        {
                                            show && (<div className="comment-title-allAns">
                                                <textarea
                                                    type='text' placeholder='Add your comment' rows={5}
                                                    style={{
                                                        margin: "5px 0px",
                                                        padding: "10px",
                                                        width: "100%",
                                                        border: "1px solid rgba(0, 0, 0, 0.2)",
                                                        borderRadius: "3px",
                                                        outline: "none",
                                                    }}

                                                >
                                                </textarea>
                                                <div className="Add-cmnt">
                                                    <button className='button1'>Add Comments</button>
                                                </div>
                                            </div>)
                                        }

                                    </div>
                                    {/* <div className='Comment-container'>
                                    <div className='comment'>
                                        <p> This is a comment
                                            <span>USername</span>
                                            <small>
                                                Time stamp
                                            </small>
                                        </p>
                                    </div>
                                    <p className='comment-text1' onClick={() => setShow(!show)}>Add a comment</p>
                                    {
                                        show && (<div className="comment-title">
                                            <textarea
                                                type='text' placeholder='Add your comment' rows={5}
                                                style={{}}>
                                            </textarea>
                                            <button>Add Comments</button>
                                        </div>)
                                    }

                                </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Your-Answer">
                <p className='AnsHead'>Your Answer</p>
                <ReactQuill
                    // value={body}
                    // onChange={handleQuill}
                    // modules={Editor.modules}
                    className="react-quill"
                    theme="snow"
                    style={{
                        height: "100px",
                    }}
                />
            </div>
            <button className='button'>Post your Answer</button>
        </div>
    )
}

export default ViewQue;
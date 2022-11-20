import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Avatar from 'react-avatar';
import moment from "moment";
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
// import { decrement, increment } from '../../features/counter/counterSlice';
import { selectCount } from '../../features/counter/counterSlice';
import './ViewQue.css';
import { useEffect } from 'react';
import { API } from '../../Global';
import parse from 'html-react-parser';
import EditorToolbar, { modules, formats } from "../ReQuill/EditorToolbar.jsx";
import ReactQuill from 'react-quill';
import { selectUser } from "../../features/UserAuth/userSlice";
import NotfoundPage from '../404Notfound/Notfound';


const ViewQue = () => {

    const [viewQue, setViewQue] = useState({}); //For API GET requests
    const user = useSelector(selectUser);  //For username, avatar etc.
    const { id } = useParams(); // extract id from URL
    const navigate = useNavigate(); //to navigate between
    const [answer, setAnswer] = useState(null);  //For posting answers from quill
    const [queComments, setQueComments] = useState(); //For posting comments for questions
    const count = useSelector(selectCount);
    const [disable, setDisable] = React.useState(false);
    const [showquecomment, setShowQueComment] = useState(false);


    // For handling ReactQuill
    const handleQuill = (value) => {
        setAnswer(value);
    };
    const getData = () => {
        fetch(`${API}/home/${id}`, {
            method: "GET",
        })
            .then(res => res.json())
            .then((que) => setViewQue(que))
    }
    const current = new Date();
    const date = `${current.getFullYear()}${current.getMonth()}${current.getDate()}`;
    // console.log(date);

    // For API GET responses
    useEffect(() => {
        getData();
    }, [])

    // For Posting Answers
    const postAnswer = async (e) => {
        e.preventDefault();
        const addAnswer = {
            detailedanswer: answer,
            user: user,
            date: date
        };
        await fetch(`${API}/home/${id}`, {
            method: "PUT",
            body: JSON.stringify(addAnswer),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                response.json()
                console.log(response)
            })
            .then(() => alert("Answer added successfully"))
            .then(() => navigate(`/home/${id}`))
            .then(() => getData())
            .then(() => setAnswer(""))
            .catch((err) => console.log(err.message))
    }

    // For Posting Question Comments
    const handleQueCommentSubmit = async (e) => {
        e.preventDefault();
        const addQueComment = {
            comment: queComments,
            user: user,
            date: date
        };
        await fetch(`${API}/home/${id}/question/comments`, {
            method: "PUT",
            body: JSON.stringify(addQueComment),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then(() => alert("Comment added successfully"))
            .then(() => navigate(`/home/${id}`))
            .then(() => getData())
            .then(() => setQueComments(""))
            .catch((err) => console.log(err.message))
    }

    // Upvote component
    const GetLikes = (e) => {
        const [like, setLike] = useState(0);

        return (
            <div className='Vote'>
                <div className='UpArrow'>
                    <FontAwesomeIcon className="Vote_icon" disabled={disable} icon={faCaretUp} size='3x' onClick={() => { setLike(like + 1); setDisable(true) }} />
                </div>
                <div className='Votecount'>
                    {like}
                </div>
                <div className='DownArrow'>
                    <FontAwesomeIcon className="Vote_icon" icon={faCaretDown} size='3x' onClick={() => like > 0 ? setLike(like - 1) : setLike(0)} />
                </div>
            </div>
        )
    }



    if (!viewQue) {
        return <NotfoundPage />
    }

    // console.log(viewQue)

    return (
        <div className='ViewQue-container'>
            {/* Topbar containing question heading and askquestion button */}
            <div className='Topbarvw1 col-12'>
                <div className='row Mainr1'>
                    <div className='allQuestions col-9'>
                        <p className='title'>
                            {viewQue?.question?.heading}
                        </p>
                    </div>
                    <div className='allQuestionsbtn col-3'>
                        <Link className='Mainlink' to="/add-question">
                            <button className='button1'>Ask Question</button>
                        </Link>
                    </div>
                </div>
                <div className='row Vqr2'>
                    <div className='Timeline'>
                        <p className='timeline' >Asked<span> {moment(viewQue?.question?.date).fromNow()}</span></p>
                        <p className='timeline' >Modified <span> {moment(viewQue?.question?.date).fromNow()}</span></p>
                        <p className='timeline' >Viewed <span>{count} times</span></p>
                    </div>
                </div>
            </div>
            <div className='Answer-container'>
                <div className='Answer'>
                    <div className='row ansr1'>
                        <div className='Answer-left'>
                            <GetLikes />
                            {/* <div className='Vote'>
                                <div className='UpArrow'>
                                    <FontAwesomeIcon className="Vote_icon" icon={faCaretUp} size='3x' onClick={() => { setQueVotecount(quevotecount + 1) }} />
                                </div>
                                <div className='Votecount'>
                                    {quevotecount}
                                </div>
                                <div className='DownArrow'>
                                    <FontAwesomeIcon className="Vote_icon" icon={faCaretDown} size='3x' onClick={() => quevotecount > 0 ? setQueVotecount(quevotecount - 1) : setQueVotecount(0)} />
                                </div>
                            </div> */}
                        </div>
                        <div className='Answer-right'>
                            <div className='Answer-body'>
                                <div className='detailedanswer'>
                                    {parse(`${viewQue?.question?.description}`)}
                                </div>
                                {viewQue?.question?.tags?.map((tag) => (
                                    <div className='Que-tags' key={tag?.id}>
                                        <button className='Tagbtn'>{tag}</button>
                                    </div>
                                ))}
                                <div className='Author'>
                                    <div className='small1'>
                                        asked {moment(viewQue?.question?.date).fromNow()}
                                    </div>
                                    <div className="author-details">
                                        <div className="avatar">
                                            <Avatar size='30' src={viewQue?.question?.user?.photo} />
                                        </div>
                                        {viewQue?.question?.user?.displayName}
                                    </div>
                                </div>
                                <div className='Comment-container'>
                                    <div className='Comments'>
                                        {(viewQue?.queComments?.length) > 0 ? (
                                            viewQue?.queComments?.map((comm) => (
                                                <p className='Under-comments' key={comm?.id}>
                                                    {comm?.comment}
                                                    <span> {' '}
                                                        <Avatar size='20' src={viewQue?.question?.user?.photo} />
                                                    </span>
                                                    &nbsp;
                                                    <small className='time-stamp'>
                                                        &nbsp;
                                                        {comm?.user?.displayName}
                                                        &nbsp;
                                                        &nbsp;
                                                        {moment(viewQue?.question?.date).fromNow()}
                                                    </small>
                                                </p>
                                            ))
                                        ) : null
                                        }
                                    </div>


                                    <p className='Comment-text' onClick={() => setShowQueComment(!showquecomment)}>Add a comment</p>
                                    {
                                        showquecomment && (<div className="comment-title">
                                            <textarea

                                                type='text' placeholder='Add your comment' rows={5} value={queComments} onChange={(e) => setQueComments(e.target.value)}
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
                                                <button className='button1' type='submit' onClick={handleQueCommentSubmit}>Add Comments</button>
                                            </div>
                                        </div>)
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='All-Answers'>
                    <p className='AnsHead'>{viewQue?.answers?.length} {' '}Answers</p>
                    {viewQue?.answers?.map((ans) => (
                        <div className="All-answers-container" key={ans?.id}>
                            <div className='row ansr1'>
                                <div className='Answer-left'>
                                    <GetLikes />
                                    {/* <div className='Vote'>
                                        <div className='UpArrow'>
                                            <FontAwesomeIcon className="Vote_icon" icon={faCaretUp} size='3x' onClick={() => setAnsVotecount(ansvotecount + 1)} />
                                        </div>
                                        <div className='Votecount'>
                                            {ansvotecount}
                                        </div>
                                        <div className='DownArrow'>
                                            <FontAwesomeIcon className="Vote_icon" icon={faCaretDown} size='3x' onClick={() => ansvotecount > 0 ? setAnsVotecount(ansvotecount - 1) : setAnsVotecount(0)} />
                                        </div>
                                    </div> */}
                                </div>
                                <div className='Answer-right'>
                                    {/* {console.log(viewQue)} */}

                                    <div className='Answer-body'>
                                        {parse(`${ans?.detailedanswer}`)}
                                        <div className='Author'>
                                            <div className='small1'>
                                                asked {moment(viewQue?.question?.date).fromNow()}
                                            </div>
                                            <div className="author-details">
                                                <div className="avatar">
                                                    <Avatar size='30' src={ans?.user?.photo} />
                                                </div>
                                                {ans?.user?.displayName}
                                            </div>
                                        </div>
                                        {/* <div className='Comment-allans-container'>
                                            {(ans?.anscomment?.length) > 0 ? (
                                                ans?.anscomments?.map((anscomment) => (
                                                    <div className='Comments-allAns' key={anscomment?.id}>
                                                        <p className='Under-allAns-comments'>{anscomment?.comment}
                                                            <span> {' '}
                                                                <Link className='User-all-Anslink'>{anscomment?.commenter_name}</Link>
                                                            </span>
                                                            &nbsp;
                                                            <small className='time-stamp'>
                                                                &nbsp;
                                                                {anscomment?.commenter_timestamp}
                                                            </small>
                                                        </p>
                                                    </div>
                                                ))
                                            ) : null
                                            }
                                            <p className='Comment-text-allAns' onClick={() => setShowAnsComment(!showanscomment)}>Add a comment</p>
                                            {
                                                showanscomment && (<div className="comment-title-allAns">
                                                    <textarea
                                                        type='text' placeholder='Add your comment' rows={5} value={ansComments} onChange={(e) => setAnsComments(e.target.value)}
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
                                                        <button className='button1' onClick={handleAnsCommentSubmit}>Add Comments</button>
                                                    </div>
                                                </div>)
                                            }
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* React Quill Text editor to Input Answers */}
            <div className="Your-Answer">
                <p className='AnsHead'>Your Answer</p>
                <EditorToolbar />
                <ReactQuill
                    theme='snow'
                    value={answer}
                    onChange={handleQuill}
                    placeholder='Introduce the problem and expand on what you put in the title'
                    modules={modules}
                    formats={formats}
                />
            </div>
            <button className='button' type='submit' onClick={postAnswer}>Post your Answer</button>
        </div>
    )
}

export default ViewQue;
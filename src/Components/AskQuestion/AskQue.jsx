import React from 'react';
import './AskQue.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TagsInput } from "react-tag-input-component";




const AskQue = () => {
    return (
        <div className='AskQuestionCard container-fluid'>
            <h4> Ask a public question</h4>
            <div className='AskQuestionCard'>

                <div className='card'>
                    <div className='Title'>
                        <label className='Heading'>Title </label>
                        <small className='Subheading'>
                            Be specific and imagine you're asking  a question to another person
                        </small>
                        <input type='text' className='Input-Title' placeholder='e.g. Is there an R function for finding the index of an element in a vector?'></input>
                    </div>
                    <div className='Body'>
                        <div className='Title'>
                            <label className='Heading '>Body</label>
                            <small className='Subheading'>
                                Include all the information someone would need to answer your question
                            </small>
                        </div>
                        {/* <ReactQuill className='React-Quill'
                            theme="snow" /> */}
                        <ReactQuill
                            theme="snow"
                        />
                    </div>
                    <div className='Title'>
                        <label className='Heading'>Tags </label>
                        <small className='Subheading'>
                            Add upto 5 tags to describe what your question is about
                        </small>
                        {/* <TagsInput
                            name="tags"
                            placeHolder='e.g. (c++ jsoh database)'
                        /> */}
                        <input type='text' className='Input-Title' placeholder='e.g. (c++ jsoh database) '></input>
                    </div>
                </div>
                <button className='button'>Review your Question</button>

            </div>
        </div>
    )
}

export default AskQue;
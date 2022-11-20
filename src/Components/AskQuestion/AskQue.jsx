import React from 'react';
import './AskQue.css';
import { useNavigate } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import { API } from "../../Global"
import ReactQuill from "react-quill";
import { TagsInput } from "react-tag-input-component";
import EditorToolbar, { modules, formats } from "../ReQuill/EditorToolbar.jsx";
import { useSelector } from 'react-redux';
import { selectUser } from "../../features/UserAuth/userSlice";
import { useState } from 'react';
import '../TagsInput/TagsInput.css';
import "react-quill/dist/quill.snow.css";



const AskQue = () => {

    // For username,avatar etc.
    const user = useSelector(selectUser);

    const navigate = useNavigate();
    // For assigning data to heading, description and tags.
    const [heading, setHeading] = useState("");
    const [description, setDescription] = useState(null);
    const [tags, setTags] = useState([]);

    // For handling react quill(a type of npm text editor) used to input answers.
    const handleQuill = (value) => {
        setDescription(value);
    };

    const current = new Date();
    const date = `${current.getFullYear()}${current.getMonth()}${current.getDate()}`;
    console.log(date);

    // To do when the add question is clicked.
    const handleSubmit = async (e) => {
        e.preventDefault();
        const bodyJSON = {
            question: {
                heading: heading,
                description: description,
                tags: tags,
                user: user,
                date: date,
            },
        };
        await fetch(`${API}/home`, {
            method: "POST",  // Creating a new Question by using Post API Method
            body: JSON.stringify(bodyJSON),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(() => alert("Question added successfully"))
            .then(() => navigate("/home"))
            .catch((err) => console.log(err.message));

    }

    return (

        <div className='AskQuestionCard container-fluid'>
            <h4> Ask a public question</h4>
            <div className='AskQuestionCard'>

                <form onSubmit={handleSubmit}>
                    <div className='card' style={{ maxWidth: "50rem", width: "100%" }}>
                        <div className='card-body'>
                            <div className='Title'>
                                <label className='Heading'>Title </label>
                                <small className='Subheading'>
                                    Be specific and imagine you're asking  a question to another person
                                </small>
                                {/* Heading */}
                                <input
                                    type='text'
                                    value={heading}
                                    onChange={(e) => setHeading(e.target.value)}
                                    className='Input-Title'
                                    placeholder='e.g. Is there an R function for finding the index of an element in a vector?'>
                                </input>
                            </div>
                            <div className='Body'>
                                <div className='Title'>
                                    <label className='Heading '>Body</label>
                                    <small className='Subheading'>
                                        Include all the information someone would need to answer your question
                                    </small>
                                </div>
                                {/* Description */}
                                <div className="text-editor">
                                    <EditorToolbar />
                                    <ReactQuill
                                        theme="snow"
                                        value={description}
                                        onChange={handleQuill}
                                        placeholder={"Introduce the problem and expand on what you put in the title "}
                                        modules={modules}
                                        formats={formats}
                                    />
                                </div>
                            </div>
                            <div className='Title'>
                                <label className='Heading'>Tags </label>
                                <small className='Subheading'>
                                    Add upto 5 tags to describe what your question is about.
                                </small>
                                {/* Tags Input component */}
                                <div className='tags-input'>
                                    <TagsInput
                                        value={tags}
                                        onChange={setTags}
                                        name="tags"
                                        placeHolder="Enter the required tags and press enter"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='button' type='submit'>Review your Question</button>
                </form>
            </div>
        </div>
    )
}

export default AskQue;
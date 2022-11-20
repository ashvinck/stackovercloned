import React, { useEffect, useState } from 'react';
import "./tagsComponent.css";
import { API } from "../../Global";
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import LoadAnim from "../../Assets/images/loadinggif.gif"
import { fetchAysncData, selectData, selectLoading } from '../../features/Questions/questionSlice';


const Tags = () => {

    const dispatch = useDispatch();
    const loading = useSelector(selectLoading)
    const data = useSelector(selectData)


    useEffect(() => { dispatch(fetchAysncData()) }, []);

    const Array = [];
    data?.map(({ question }) => (
        question.tags.map((tag) => (
            Array.push(tag)
        ))
    ))
    const tagsArray = [...new Set(Array)]
    // console.log(tagsArray)

    if (loading) {
        return (
            <div className='col-12'>
                <img src={LoadAnim} alt='loadinggif' />
            </div>
        )
    }
    return (
        <div className="ViewTags-container">
            <div className='Mainbar col'>
                <div className='Topbarq'>
                    <div className='row Mainr1'>
                        <h2 className='title'>Tags</h2>
                    </div>
                    <div className='row Mainr2'>
                        <h6>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</h6>
                    </div>
                    <div className='Search-container col'>
                        <div className='row searchr'>
                            <div className="col-12">
                                <div className="form-group SearchbarContainer">
                                    <div className="SearchIcon">
                                        <Link className='Searchlink'> <FontAwesomeIcon icon={faSearch} /></Link>
                                    </div>
                                    <input type="text" className="Input" placeholder="Filter by tag name" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Tag-body col-12'>
                    <div className='Tag-card row'>
                        {tagsArray.map((tag) => (
                            <div className="card tg" key={tag.id}>
                                <div className="card-body">
                                    <h6 className='TagHeading'>{tag}</h6>
                                    {/* {console.log(tag)} */}
                                    <div className='Tag-description'>
                                        For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind that JavaScript is NOT the same as Java! Include all labels that are relevant to your question; e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte], etc
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Tags;
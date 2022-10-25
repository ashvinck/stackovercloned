import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import './QuestionsLayout.css';


const QuestionsLayout = (props) => {
    return (
        <div className="QuestionsLayout-container">

            {/* For lg and above screens */}
            <div className='QuestionsLayout d-none d-lg-block'>
                <div className='Que-container'>
                    <div className='row'>
                        <div className='Que-Left col-2'>
                            <div className='row Qr2'>
                                <p className='Que-info'>No of votes</p>
                            </div>
                            <div className='row Qr3'>
                                <p className='Que-info'>No of answers</p>
                            </div>
                            <div className='row Qr4'>
                                <p className='Que-info'>No of views</p>
                            </div>
                        </div>
                        <div className='Que-Right col-10'>
                            <div className='row Qr5'>
                                <div className='Que-Title col-12'>
                                    <Link to='/question' className='QueLink'>nsdncodlsfnkdsnfnldsnfnkldsfksdkfklsldkfmksdmkfmksdmfmkdsfmkmdskdfmsklsklndsfkvnksdfnkvnsdfklnknsdfnvsksdskflkdskncskncnsbxsxs </Link>
                                </div>
                            </div>
                            <div className='row Qr6'>
                                <div className='Que-Body col-12'>
                                    sjefkdnfknskckdkcmksddckeskdmkesmdfkedekkdmdkesdsdkdesdkeskdsekdsmnkdlsdmkefkmklsmdmsdmsmldmsmldsmdsldlsmdlmslms xankndkandksjndsdsjnjdsdnsknl
                                </div>
                            </div>
                            <div className='Que-tags'>
                                <button className='Tagbtn'>Tag1</button>
                                <button className='Tagbtn'>Tag2</button>
                            </div>
                        </div>
                    </div>
                    <div className='row Qr7'>
                        <div className='Author col-12'>
                            <Avatar className='Avatar1' size='20'></Avatar>
                            <Link className='QueLink Name'>Author Name</Link>
                            <span className='Timestamp'>Timestamp</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* For screens lower than lg screens */}
            <div className='QuestionsLayout d-lg-none'>
                <div className='Que-container'>
                    <div className='row Qrsm1'>
                        <div className='InfoContainer'>
                            <p>No of votes</p>
                            <p>No of answers</p>
                            <p>No of views</p>
                        </div>
                    </div>
                    <div className='row Qrsm2'>
                        <div className='Queheading'>
                            <Link className='QueLink' to='/question'>
                                <h6>Heading of the question</h6>
                            </Link>
                        </div>
                    </div>
                    <div className='row Qrsm3'>
                        <div className='Quesm-tags'>
                            <button className='Tagbtnsm'>Tag1</button>
                            <button className='Tagbtnsm'>Tag2</button>
                        </div>
                    </div>
                    <div className='Authorsm col-12'>
                        <Avatar className='Avatar1' size='20'></Avatar>
                        <Link className='QueLink Name'>Author Name</Link>
                        <span className='Timestamp'>Timestamp</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default QuestionsLayout;
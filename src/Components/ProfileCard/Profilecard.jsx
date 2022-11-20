import React from 'react';
import './ProfileCard.css';
import moment from "moment";
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/UserAuth/userSlice';
import Avatar from 'react-avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons';


const Profilecard = () => {

    const user = useSelector(selectUser);

    return (
        <div className="profilecard container-fluid">
            {/* Profile Card */}
            <div className='ProfileCard pl24 pt24'>
                <div className='col-12'>
                    <div className='row pr1'>
                        <div className='Dp col-3'>
                            <Avatar className='Avatar' src={user?.photo} />
                        </div>
                        <div className='Username1 col-6'>
                            {/* There is a problem with firebase displaying name of the user while using authentication from github, but goggle works fine. */}
                            <h2>{user.displayName}</h2>
                            <h3>{user.screenName}</h3>
                            <div className='Membership'>
                                <FontAwesomeIcon className='Bdayicon' icon={faCakeCandles} />
                                &nbsp;
                                Member for  {moment().fromNow(false)}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Stat */}
                <div className='row pr2'>
                    <p className='Subdiv m-0 p-0'>Stats</p>
                    <div className='Stats col-12'>
                        <div className='rep col-3'>
                            1
                            <div className='statss'>reputation</div>
                        </div>
                        <div className='reach col-3'>
                            0
                            <div className='statss'>reached</div>
                        </div>
                        <div className='ans col-3'>
                            0
                            <div className='statss'>answers</div>
                        </div>
                        <div className='que col-3'>
                            0
                            <div className='statss'>questions</div>
                        </div>
                    </div>
                </div>
                {/* Badges  */}
                <div className='row pr2'>
                    <p className='Subdiv m-0 p-0'>Badges</p>
                    <div className='Badges col-12'>
                        The user has not earned any badges
                    </div>
                </div>
                {/* Posts */}
                <div className='row pr2'>
                    <p className='Subdiv m-0 p-0'>Posts</p>
                    <div className='Posts col-12'>
                        <svg aria-hidden="true" className="mb24 svg-spot spotEmptyXL" width="196" height="196" viewBox="0 0 196 196">
                            <path opacity=".07" d="M35 177.5c-19.5-9-29.35-26.54-26-82 3.35-55.46 14.8-66.9 32.5-73 17.7-6.1 86.22-21.95 120 5.5s37.46 52.67 23 96.5c-14.46 43.84-22.26 63.24-60 61-11.4-.68-22.3-.85-32.5-1.02-23.56-.38-43.4-.7-57-6.98ZM33 42v26a7 7 0 0 0 7 7h113a7 7 0 0 0 7-7V42a7 7 0 0 0-7-7H40a7 7 0 0 0-7 7Zm7 39a7 7 0 0 0-7 7v27a7 7 0 0 0 7 7h113a7 7 0 0 0 7-7V88a7 7 0 0 0-7-7H40Z"></path>
                            <path opacity=".2" d="M42 48a4 4 0 0 1 4-4h112a7 7 0 0 1 7 7v23a7 7 0 0 1-7 7H49a7 7 0 0 1-7-7V48Zm0 47a4 4 0 0 1 4-4h112a7 7 0 0 1 7 7v22a7 7 0 0 1-7 7H49a7 7 0 0 1-7-7V95Zm-1 36h3.19a2 2 0 1 1 0 4H40a3 3 0 0 0-3 3v4.44a2 2 0 1 1-4 0V138a7 7 0 0 1 7-7h1Zm11.65 2c0-1.1.9-2 2-2h8.37a2 2 0 1 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.37a2 2 0 1 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.38a2 2 0 1 1 0 4H92.3a2 2 0 0 1-2-2Zm18.84 0c0-1.1.9-2 2-2h8.37a2 2 0 0 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.37a2 2 0 0 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2H153a7 7 0 0 1 7 7v4.44a2 2 0 1 1-4 0v-4.58a3 3 0 0 0-3-2.86h-4.19a2 2 0 0 1-2-2ZM35 151.56a2 2 0 0 1 2 2v4.51a3 3 0 0 0 3 2.93h4.19a2 2 0 1 1 0 4h-4.35a7 7 0 0 1-6.84-7v-4.44c0-1.1.9-2 2-2Zm123 0a2 2 0 0 1 2 2v4.74a7 7 0 0 1-7 6.69h-4.19a2 2 0 1 1 0-4h4.33a3 3 0 0 0 2.86-3v-4.43c0-1.1.9-2 2-2ZM52.65 163c0-1.1.9-2 2-2h8.37a2 2 0 1 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.37a2 2 0 1 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.38a2 2 0 1 1 0 4H92.3a2 2 0 0 1-2-2Zm18.84 0c0-1.1.9-2 2-2h8.37a2 2 0 0 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.37a2 2 0 0 1 0 4h-8.37a2 2 0 0 1-2-2Z"></path>
                            <path d="M124.48 14.24 120.25 10 116 14.24l4.24 4.25 4.25-4.25ZM52 58a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12-4c0-1.1.9-2 2-2h80a2 2 0 1 1 0 4H66a2 2 0 0 1-2-2ZM33 42a7 7 0 0 1 7-7h113a7 7 0 0 1 7 7v26a7 7 0 0 1-7 7H40a7 7 0 0 1-7-7V42Zm7-3a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h113a3 3 0 0 0 3-3V42a3 3 0 0 0-3-3H40Zm16 62a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm10-2a2 2 0 1 0 0 4h80a2 2 0 1 0 0-4H66ZM40 81a7 7 0 0 0-7 7v27a7 7 0 0 0 7 7h113a7 7 0 0 0 7-7V88a7 7 0 0 0-7-7H40Zm-3 7a3 3 0 0 1 3-3h113a3 3 0 0 1 3 3v27a3 3 0 0 1-3 3H40a3 3 0 0 1-3-3V88Zm150.97 54.49L179.5 134l-8.49 8.49 8.49 8.48 8.48-8.48Zm-8.48 2.82-2.83-2.82 2.83-2.83 2.82 2.83-2.82 2.82ZM8 97a2 2 0 0 1 2 2v4h4a2 2 0 1 1 0 4h-4v4a2 2 0 1 1-4 0v-4H2a2 2 0 1 1 0-4h4v-4c0-1.1.9-2 2-2Z"></path>
                        </svg>
                        <div>The user has not earned any badges</div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Profilecard;
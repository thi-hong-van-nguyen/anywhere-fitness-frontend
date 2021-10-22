import React from 'react'
import { Link } from 'react-router-dom'
import video from '../../src/video2.mp4'

export default function Home() {

    return (
        <div className='home-wrap'>
            <div className='home-top-wrap'>
                {/* <div className='video-wrap'> */}
                <video autoPlay muted loop playbackrate='5.0'>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* </div> */}
                <div className='home-top'>
                    <h1>
                        WE OFFER BOTH HANDS-ON AND VIRTUAL CLASSES!
                    </h1>
                    <div>
                        GET IN SHAPE WHILE GOING TO SCHOOL WITH HANDS ON LEARNING
                    </div>
                    <Link to='/classes'>BOOK NOW</Link>
                </div>
            </div>
            <div className='home-middle-wrap'>
                <div className='home-middle'>
                    <div><i className='arrow down'></i></div>
                    <h3>
                        BECOME A PERSONAL TRAINER
                    </h3>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div><i className='arrow up'></i></div>
                </div>
            </div>
            <div className='home-bottom-wrap'>
                <div className='home-bottom'>
                    <div className='bottom-row bottom-row-1'>
                        <div className='bottom-row-img  bottom-row-img-1'></div>
                        <div className='bottom-row-contents'>
                            <div>
                                <h3>
                                    OUR PROGRAMS
                                </h3>
                                <p>
                                    Anywhere Fitness offers group workouts that are purposeful, and process oriented, and powerful.
                                </p>
                            </div>
                            <button>LEARN MORE</button>
                        </div>
                    </div>
                    <div className='bottom-row bottom-row-2'>
                        <div className='bottom-row-img bottom-row-img-2'></div>
                        <div className='bottom-row-contents'>
                            <div>
                                <h3>
                                    OUR PRICING
                                </h3>
                                <p>
                                    Join with a family member and save 10% on any functional fitness membership.
                                </p>
                            </div>
                            <button >REGISTER MEMBER</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}


import React from 'react'
import video from '../../src/video2.mp4'

export default function Home() {
    return (
        <div className='home-wrap'>
            <div className='video-wrap'>
                <video autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>


        </div>
    )
}


import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="App-header">
            <div className='navigations'>
                <div className='logo-wrap'>
                    <div>A/F</div>
                    <div>AnywhereFitness</div>
                </div>
                <div className='nav-links'>
                    <div className='nav nav-1'><Link to='/'>HOME</Link></div>
                    <div className='nav nav-2'><Link to='/classes'>CLASSES</Link></div>
                    <div className='nav nav-3'><Link to='/bookings'>BOOKINGS</Link></div>
                    <div className='nav nav-4'><Link to='/login'>LOG IN</Link></div>
                    {/* <div className='nav nav-4'><Link to='/logout'>LOG OUT</Link></div> */}
                    <div className='nav nav-5'><Link to='/signup'>SIGN UP</Link></div>
                </div>
            </div>
        </header>
    )
}

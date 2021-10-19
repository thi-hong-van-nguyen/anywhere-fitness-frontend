import React from 'react'
import FooterForm from '../components/FooterForm'

export default function Footer() {
    return (
        <footer>
            <div className='footer-wrap'>
                <div className='footer-top'>
                    <div className='footer-row footer-row-1'>
                        <h3>Follow Us</h3>
                        <div className='social-icons'>
                            <a href="#top" className="fa fa-facebook"></a>
                            <a href="#top" className="fa fa-twitter"></a>
                            <a href="#top" className="fa fa-instagram"></a>
                            <a href="#top" className="fa fa-twitter"></a>
                        </div>
                    </div>
                    <div className='footer-row footer-row-2'>
                        <h3>Contact Us for more Info</h3>
                        <FooterForm />
                    </div>
                    <div className='footer-row footer-row-3'>
                        <div>
                            <h3>Project</h3>
                            <div>CHALLENGE Studio</div>
                        </div>
                        <div>
                            <h3>Email Us</h3>
                            <a href="mailto:anywhere@fitness.com">anywhere@fitness.com</a>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div>
                        <span>&#169; </span>
                        <span>Copyright 2021 AnywhereFitness | </span>
                        <span>1234 Somewhere, San Jose, CA, 95XXX | </span>
                        <span>408-XXX-XXXX</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

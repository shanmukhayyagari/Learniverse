import React from 'react';
import '../css/Footer.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className='footer-first'>
                    <img src="./logo.png" alt="" />
                    <ul>
                        <li>
                            <span>Call Us:</span>
                            <a style={{ color: 'white',marginLeft:'10px' }} className='fa' href="tel:344-755-111">344-755-111</a>
                        </li>
                        <li>
                            <span>Email:</span>
                            <a style={{ color: 'white' }}  className='fa' href="mailto:support@learniverse.com">support@learniverse.com</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-list'>
                    <div>
                        <h4>Our Site</h4>
                        <ul>
                            <li>
                                <Link style={{ color: 'white' }} to="/about">About Us</Link>
                            </li>
                            <li>
                                <a>How It Works</a>
                            </li>
                            <li>
                                <a>Affiliates</a>
                            </li>
                            <li>
                                <a>Testimonials</a>
                            </li>
                            <li>
                                <Link style={{ color: 'white' }} to = '/contact'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='help'>
                        <h4>Help Support</h4>
                        <ul>
                            <li>
                                <a>Support Forum</a>
                            </li>
                            <li>
                                <a>Terms &amp; Conditions</a>
                            </li>
                            <li>
                                <a>Support Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>
                    © {new Date().getFullYear()} <a href="#">learniverse</a>. All rights reserved. Created by{' '}
                    <a href="#">learniverse Team</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

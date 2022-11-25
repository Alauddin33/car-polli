import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer p-5 bg-indigo-900 text-white flex justify-evenly items-center">
            <div>
                <img width="100" height="100" src={logo} alt="" />
                <p>Car Polli<br />Providing reliable vehicle since 2001</p>
            </div>
            <div>
                <span className="footer-title">Social</span>

                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" ><FaFacebook /> </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" ><FaInstagram /> </a>
                    <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" target="_blank" rel="noopener noreferrer" ><FaLinkedin /> </a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
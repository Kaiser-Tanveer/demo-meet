import React from 'react';
import logo from '../../Assets/Logos/icons8-appointment-64.png';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="px-4 py-8 bg-gray-200 text-gray-600w-full">
            <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-around sm:space-y-0">
                <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                    <div className="">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                        <li>
                            <Link>Terms of Use</Link>
                        </li>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                    </ul>
                </div>
                <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                    <li>
                        <FaFacebook className='text-2xl' />
                    </li>
                    <li>
                        <FaLinkedin className='text-2xl' />
                    </li>
                    <li>
                        <FaGithub className='text-2xl' />
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className="p-10">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency checkup</a>
                    <a className="link link-hover">Monthly checkup</a>
                    <a className="link link-hover">Weekly checkup</a>
                    <a className="link link-hover">Deep checkup</a>
                </div>
                <div>
                    <span className="footer-title">Oral Health</span>
                    <a className="link link-hover">Fluoride treatment</a>
                    <a className="link link-hover">Cavity filling</a>
                    <a className="link link-hover">Teeth whitening</a>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <a className="link link-hover">New York-101010 hudson</a>
                </div>

            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022  All Rights Reserved </p>
            </div>
        </footer>
    );
};

export default Footer;
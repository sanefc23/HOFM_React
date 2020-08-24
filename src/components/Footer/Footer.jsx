import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <div className="my-footer">
            <p className="footer-text">Contactanos</p>
            <img className="social-media-icon" src={process.env.PUBLIC_URL + "/images/footer/instagram.png"} alt="" />
            <img className="social-media-icon" src={process.env.PUBLIC_URL + "/images/footer/twitter.png"} alt="" />
            <img className="social-media-icon" src={process.env.PUBLIC_URL + "/images/footer/facebook.png"} alt="" />
            <img className="social-media-icon" src={process.env.PUBLIC_URL + "/images/footer/whatsapp.png"} alt="" />
        </div>
    );
}

export default Footer;

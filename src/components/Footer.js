import React from 'react';
import './Footer.css';
import facebookIcon from './images/facebook.png';
import instagramIcon from './images/instagram.png';
import linkedinIcon from './images/linkedin.png';
// import brandLogo from './images/brand_logo.png';

export default function Footer() {
    return (
        <footer>
            <div className="brand_logo">
                {/* <img src={brandLogo} className="brand_logo" alt="brand_logo" /> */}
                <h1>DocScribd</h1>
            </div>
            <div className="Copyright">
                <p>Copyright © 2024 docscribd.in</p>
            </div>
            <div className="social_media">
                <p>Follow us on social media</p>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src={facebookIcon} alt="facebook" /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instagramIcon} alt="instagram" /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="linkedin" /></a>
            </div>
        </footer>
    );
}

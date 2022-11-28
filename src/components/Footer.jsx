import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerLogo">
                <img src="../images/cil.png" alt="Logo-footer"/>
            </div>
            <div className="footerText">
                <p>It is a long established fact that a reader will be distracter by the readable content of a page whenters.</p>
            </div>
            <div className="footerIcons">
                <div className="borderIcon">
                    <img src="../images/twitter_logo.png" alt="twitter-logo"/>
                </div>
                <div className="borderIcon">
                    <img src="../images/fb_logo.png" alt="facebook-logo"/>
                </div>
                <div className="borderIcon">
                    <img src="../images/insta_logo.png" alt="instagram-logo"/>
                </div>
            </div>
        
        <div className="footerGrid">
            <div className="footerText1">
                <p>About Us</p>
            </div>
            <div className="footerText2">
                <p>Navigate</p>
            </div>
            <div className="footerText3">
                <p>Contact Us</p>
            </div>
            <div className="textColumn1">
                <p>About</p>
                <p>Privacy & Policy</p>
                <p>Terms & Conditions</p>
                <p>FAQ</p>
            </div>
            <div className="textColumn2">
                <p>How we work</p>
                <p>Services</p>
                <p>FAQ</p>
                <p>Contact</p>
                <p>Free Quote</p>
            </div>
            <div className="textColumn3">
                <p>Ricardo Margain 444</p>
                <p>Call: +52 81 1234 5678</p>
                <p>Email: info@challenge.com</p>
            </div>
            <div className="textWhatspp">
                <img src="../images/whatsapp_logo.png" alt="whatsapp-logo"/>
            </div>
        </div>
    </div>
    );
};

export default Footer;
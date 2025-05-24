import React from "react";
import "./Footer.css";
import Middle from "../Middle/Middle";
import Bottom from "../Bottom/Bottom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <Middle />
                    <Bottom/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

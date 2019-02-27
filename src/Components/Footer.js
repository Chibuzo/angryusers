import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/footer-logo.png";

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row" style={{ paddingBottom: '0px', paddingTop: '50px' }}>
                    <div className="col-sm-12 col-md-2 text-center"><Link to="/"><img src={logo} className="footer-logo" alt="AngryUsers Logo"  /></Link></div>
                    <div className="col-lg-1 col-md-1"></div>
                    <div className="col-lg-3 col-xs-6 col-sm-3">
                        
                        <ul className='footer-nav'>
                            <li><h4>AngryUsers</h4></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/whyangryusers'>Why AngryUsers</a></li>
                            <li><a href='/blog'>Blog</a></li>
                            <li><a href='/contact'>Contact Us</a></li>
                        </ul>
                        
                    </div>

                    <div className="col-lg-2 col-xs-6 col-sm-5 ">
                        <ul className="footer-nav">
                            <li><h4>Legal</h4></li>
                            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                            <li><Link to="/termsofuse">Terms of Use</Link></li>
                            <li><Link to="/disclaimer">Disclaimer</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-5 hidden">
                        <ul className="footer-nav">
                            <li><h4>For Companies</h4></li>
                            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                            <li><Link to="/termsofuse">Terms of Use</Link></li>
                        </ul>
                    </div>

                    {/* <div className="col-lg-3 col-xs-12 col-sm-5 pull-right">
                        <div className="fb-page" data-href="https://web.facebook.com/angryusers.online/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://web.facebook.com/angryusers.online/" className="fb-xfbml-parse-ignore"><a href="https://web.facebook.com/angryusers.online/">AngryUsers</a></blockquote></div>
                    </div> */}

                </div>    

                <br /><br />
                <div className="row">
                    <div className="col-lg-6 col-xs-12 col-sm-6 hidden">Copyrights &copy; {new Date().getFullYear()}, angryusers.com</div>
                    <div className="col-lg-6 col-xs-12 col-sm-6 pull-right text-right">
                        <ul className="socialicons">
                            <li><a href="https://web.facebook.com/angryusers.online/"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="https://twitter.com/angry_users"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://instagram.com/angryusers/"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
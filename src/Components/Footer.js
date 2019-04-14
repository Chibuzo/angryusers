import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/footer-logo.png";

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row" style={{ paddingBottom: '0px', paddingTop: '50px' }}> 
                    <div className="col-md-3 col-xs-12">
                        <ul className='footer-nav'>
                            <li><h4>AngryUsers</h4></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/whyangryusers'>Why AngryUsers</a></li>
                            <li><a href='/blog'>Blog</a></li>
                            <li><a href='/contact'>Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-xs-12">
                        <ul className="footer-nav">
                            <li><h4>Company</h4></li>
                            <li><Link to="/company/claim-account">Claim Account</Link></li>
                            <li><Link to="/company">What to Expect</Link></li>
                            <li><Link to="/company/contactus">Contact Us</Link></li>
                            <li><Link to="/company/signin">Sign In</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-2 col-xs-12 ">
                        <ul className="footer-nav">
                            <li><h4>Legal</h4></li>
                            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                            <li><Link to="/termsofuse">Terms of Use</Link></li>
                            <li><Link to="/disclaimer">Disclaimer</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-1 col-md-1"></div>

                    <div className="col-md-3">
                        <ul className="footer-nav">
                            <li><h4>About</h4></li>
                        </ul>
                        <p className="text-left" style={{ fontSize: '13px', color: '#f0f0f0', paddingLeft: '7px', fontWeight: '300', fontFamily: 'Open Sans', lineHeight: '21px' }}>AngryUsers is a platform inspired and designed as a response to the anger and frustration experienced by users and customers of different brands and organizations.</p>
                        
                        <Link to="/"><img src={logo} className="footer-logo" alt="AngryUsers Logo" /></Link>
                    </div>


                    {/* <div className="col-lg-3 col-xs-12 col-sm-5 pull-right">
                        <div className="fb-page" data-href="https://web.facebook.com/angryusers.online/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://web.facebook.com/angryusers.online/" className="fb-xfbml-parse-ignore"><a href="https://web.facebook.com/angryusers.online/">AngryUsers</a></blockquote></div>
                    </div> */}

                </div>    

                <br /><br />
                <div className="row">
                    <div className="col-lg-6 col-xs-12 col-m-6 hidden">Copyrights &copy; {new Date().getFullYear()}, angryusers.com</div>
                    <div className="col-xs-12 col-sm-12 col-md-12 text-center">
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
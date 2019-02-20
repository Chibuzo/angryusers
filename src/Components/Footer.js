import React from "react";
import { Link } from "react-router-dom";

//import logo from "../images/logo.jpg";

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row" style={{ paddingBottom: '0px', paddingTop: '50px' }}>
                    {/* <div className="col-lg-1 col-xs-3 col-sm-2 logo "><a href=""><img src={logo} alt=""  /></a></div> */}
                    <div className="col-lg-3 col-xs-6 col-sm-3 ">
                        {/*  */}
                        
                        <ul className='footer-nav'>
                            <li><h4>AngryUsers</h4></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/whyangryusers'>Why AngryUsers</a></li>
                            <li><a href='/blog'>Blog</a></li>
                            <li><a href='/contact'>Contact Us</a></li>
                        </ul>
                        
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-5 ">
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

                </div>    

                <br /><br />
                <div className="row">
                    <div className="col-lg-6 col-xs-12 col-sm-6">Copyrights &copy; {new Date().getFullYear()}, angryusers.com</div>
                    <div className="col-lg-6 col-xs-12 col-sm-6 text-right">
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
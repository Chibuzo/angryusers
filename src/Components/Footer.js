import React from "react";
import { Link } from "react-router-dom";

//import logo from "../images/logo.jpg";

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row" style={{ paddingBottom: '40px', paddingTop: '50px' }}>
                    {/* <div className="col-lg-1 col-xs-3 col-sm-2 logo "><a href=""><img src={logo} alt=""  /></a></div> */}
                    <div className="col-lg-3 col-xs-12 col-sm-3 ">
                        {/* <p>Copyrights {new Date().getFullYear()}, angryusers.com</p> */}
                        
                        <ul className='footer-nav'>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/how-it-works'>How it works</a></li>
                            <li><a href='/blog'>Blog</a></li>
                            <li><a href='/contact'>Contact Us</a></li>
                        </ul>
                        
                    </div>

                    <div className="col-lg-3 col-xs-12 col-sm-5 sociconcent">
                        <ul className="footer-nav">
                            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                            <li><Link to="/termsofuse">Terms of Use</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-xs-12 col-sm-5 sociconcent">
                        <ul className="socialicons">
                            <li><a href=""><i className="fa fa-facebook-square"></i></a></li>
                            <li><a href=""><i className="fa fa-twitter"></i></a></li>
                            <li><a href=""><i className="fa fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
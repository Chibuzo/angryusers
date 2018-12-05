import React from "react";

import logo from "../images/logo.jpg";

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-1 col-xs-3 col-sm-2 logo "><a href=""><img src={logo} alt=""  /></a></div>
                    <div className="col-lg-8 col-xs-9 col-sm-5 ">Copyrights {new Date().getFullYear()}, angryusers.com</div>
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
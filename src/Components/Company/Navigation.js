import React from "react";
import logo from "../../../src/images/logo.png";

const Nav = () => {
    return(
        <nav className="bg-dark ftco-navbar-light" id="ftco-navbar" style={{ marginBottom: 0 }}>
            <div className="container">
                <a className="navbar-brand" style={{ padding: '0', paddingTop: '5px' }} href="/"><img src={logo} style={{ width: '144px' }} alt="AngryUsers Logo" /></a>
                <div className="navbar-header" style={{ padding: '10px' }}>
                    <button className="navbar-toggler navbar-toggle pull-right" type="button" style={{ marginTop: '7px' }} data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>
                </div>    

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item"><a href="/company" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="/company/claim-account" className="nav-link">Claim Account</a></li>
                        <li className="nav-item"><a href="/company/contact" className="nav-link">Contact Us</a></li>
                        <li className="nav-item"><a href="/company/signin" className="nav-link"><i className="fa fa-user"></i>&nbsp;Sign In</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
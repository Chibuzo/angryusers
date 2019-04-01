import React from "react";
import logo from "../../../src/images/logo.png";

const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar" style={{ marginBottom: 0 }}>
            <div className="container">
                <a className="navbar-brand" href="/"><img src={logo} className="logo" alt="AngryUsers Logo" /></a>
                <button className="navbar-toggler pull-right" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
	                    </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a href="/company" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="/company/claim-account" className="nav-link">Claim Account</a></li>
                        <li className="nav-item"><a href="/company/contact" className="nav-link">Contact Us</a></li>
                        <li className="nav-item mr-md-2"><a href="/company/signin" className="btn btn-primary">Sign In</a></li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
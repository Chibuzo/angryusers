import React, { Component } from "react";
import {Link} from "react-router-dom";

import logo from "../images/logo.png";
import avatar from "../images/angry.jpg";

import User from "../Helpers/User";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { loggedIn: false };
    }

    componentDidMount() {
        if (User.isLoggedIn()) {
            this.setState({ loggedIn: true });
        }
    }

    showLoginModal = () => {
        this.props.triggerLogin(true);
    }

    logOut = () => {
        User.logout();
        this.setState({ loggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.loggedIn;
        let menu, nav;

        if (isLoggedIn) {
            let user = User.getUserData();

            menu = <div className="avatar pull-right dropdown">
                <b className="caret"></b> <a data-toggle="dropdown" href=""><img src={user.Photo_url} alt={user.Fullname} title={user.Fullname} /></a>
                <ul className="dropdown-menu" role="menu">
                    {/* <li role="presentation"><a role="menuitem" tabIndex="-1" href="">My Complaints</a></li> */}
                    <li role="presentation"><a role="menuitem" tabIndex="-3" href="" onClick={this.logOut}>Log Out</a></li>
                </ul>
            </div>;
        } else {
            menu = <div className="avatar pull-right dropdown">
                <b className="caret"></b> <a data-toggle="dropdown" href=""><img src={avatar} alt="" /></a>
                <ul className="dropdown-menu" role="menu">
                    <li role="presentation"><a role="menuitem" tabIndex="-1" onClick={this.showLoginModal}>Login</a></li>
                </ul>
            </div>;
        }

        let logo_div = <div className="col-xs-3 col-sm-2 col-md-5"><Link to="/"><img src={logo} className="logo" alt="AngryUsers Logo" /></Link></div>;

        if (this.props.nav === true) {
            nav = <div className="row">
                { logo_div }
                
                <div className="col-md-7">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed btn btn-default" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            {/* <span class="icon-bar"></span> */}
                            <i className="fa fa-list fa-lg"></i>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/whyangryusers">Why AngryUsers</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>;
        } else {
            nav = <div className="row">
                    {logo_div }

                    <div className="search col-sm-12 col-md-4">
                    <div className="wrap">
                        <form method="post" className="form">
                            <div className="pull-left txt"><input type="text" className="form-control" placeholder="Search Topics" /></div>
                            <div className="pull-right"><button className="btn btn-default" type="button"><i className="fa fa-search"></i></button></div>
                            <div className="clearfix"></div>
                        </form>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 avt">
                    <div className="stnt pull-left">
                        <button className="btn btn-primary" onClick={this.props.showComplaintForm}>Post Complaint</button>
                    </div>

                    {menu}
                    <div className="env pull-right"><i className="fa fa-envelope"></i></div>
                    <div className="clearfix"></div>
                </div>
            </div>;
        }

        return(
            <section>
                <div className="headernav">
                    <div style={{ padding: '2px', backgroundColor: '#CF4137' }}></div>
                    <div className="container">
                        { nav }
                    </div>
                </div>  
            </section>
        );
    }
}

export default SearchBar;
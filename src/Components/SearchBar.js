import React, { Component } from "react";
import {Link} from "react-router-dom";

import logo from "../images/logo.jpg";
import avatar from "../images/angry.jpg";

import User from "../Helpers/User";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { loggedIn: false }
    }

    componentDidMount() {
        if (User.isLoggedIn()) {
            this.setState({ loggedIn: true });
        }
    }

    showLoginModal = () => {
        this.props.triggerLogin()
    }

    logOut = () => {
        User.logout();
        this.setState({ loggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.loggedIn;
        let menu;

        if (isLoggedIn) {
            let user = User.getUserData();

            menu = <div className="avatar pull-left dropdown">
                <a data-toggle="dropdown" href=""><img src={user.Photo_url} alt="" /></a> <b className="caret"></b>
                <div className="status green">&nbsp;</div>
                <ul className="dropdown-menu" role="menu">
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="">My Complaints</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-3" href="" onClick={this.logOut}>Log Out</a></li>
                </ul>
            </div>;
        } else {
            menu = <div className="avatar pull-left dropdown">
                <a data-toggle="dropdown" href=""><img src={avatar} alt="" /></a> <b className="caret"></b>
                <div className="status green">&nbsp;</div>
                <ul className="dropdown-menu" role="menu">
                    <li role="presentation"><a role="menuitem" tabIndex="-1" onClick={this.showLoginModal}>Login</a></li>
                </ul>
            </div>;
        }

        return(
            <section>
                <div className="headernav">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-xs-3 col-sm-2 col-md-2 logo "><img src={logo} alt=""  /></div>
                            <div className="col-lg-3 col-xs-9 col-sm-5 col-md-3 selecttopic">
                                <div className="dropdown">
                                    <Link to="/" >Angry Users</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 search hidden-xs hidden-sm col-md-3">
                                <div className="wrap">
                                    <form method="post" className="form">
                                        <div className="pull-left txt"><input type="text" className="form-control" placeholder="Search Topics" /></div>
                                        <div className="pull-right"><button className="btn btn-default" type="button"><i className="fa fa-search"></i></button></div>
                                        <div className="clearfix"></div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xs-12 col-sm-5 col-md-4 avt">
                                <div className="stnt pull-left">
                                    <button className="btn btn-primary" onClick={this.props.showComplaintForm}>Post Complaint</button>
                                </div>
                                <div className="env pull-left"><i className="fa fa-envelope"></i></div>
                        
                                {menu}
                        
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>  
            </section>
        );
    }
}

export default SearchBar;
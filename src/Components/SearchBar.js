import React, { Component } from "react";
import {Link} from "react-router-dom";

import logo from "../images/logo.png";
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

            menu = <div className="avatar pull-right dropdown">
                <b className="caret"></b> <a data-toggle="dropdown" href=""><img src={user.Photo_url} alt="" /></a>
                <ul className="dropdown-menu" role="menu">
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="">My Complaints</a></li>
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

        return(
            <section>
                <div className="headernav">
                    <div style={{ padding: '1px', backgroundColor: '#CF4137' }}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-3 col-sm-2 col-md-5"><Link to="/"><img src={logo} className="logo" alt="AngryUsers Logo" /></Link></div>
                            
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
                        </div>
                    </div>
                </div>  
            </section>
        );
    }
}

export default SearchBar;
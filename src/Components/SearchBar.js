import React, { Component } from "react";
import {Link} from "react-router-dom";

import logo from "../images/logo.jpg";
import avatar from "../images/avatar.jpg";

class SearchBar extends Component {
    render() {
        return(
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
                                <button className="btn btn-primary">Start New Topic</button>
                            </div>
                            <div className="env pull-left"><i className="fa fa-envelope"></i></div>
                    
                            <div className="avatar pull-left dropdown">
                                <a data-toggle="dropdown" href=""><img src={avatar} alt="" /></a> <b className="caret"></b>
                                <div className="status green">&nbsp;</div>
                                <ul className="dropdown-menu" role="menu">
                                    <li role="presentation"><a role="menuitem" tabindex="-1" href="">My Profile</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-2" href="">Inbox</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-3" href="">Log Out</a></li>
                                    <li role="presentation"><a role="menuitem" tabindex="-4" href="">Create account</a></li>
                                </ul>
                            </div>
                    
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default SearchBar;
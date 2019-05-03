import React, { Component } from "react";
import {Link} from "react-router-dom";
import CompanyAutosuggest from "./CompanyAutosuggest";

import logo from "../images/logo.png";
import avatar from "../images/angry.jpg";

import User from "../Helpers/User";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { loggedIn: false, company_value: '', company_id: 0 };
    }

    componentDidMount() {
        if (User.isLoggedIn()) {
            this.setState({ loggedIn: true });
        }
    }

    componentDidUpdate() {
        if (this.props.updateUserView === true && this.state.loggedIn === false) {
            this.setState({ loggedIn: this.props.updateUserView });
        }
    }

    showLoginModal = (e) => {
        e.preventDefault();
        this.props.triggerLogin(true);
    }

    logOut = () => {
        User.logout();
        this.setState({ loggedIn: false });
    }

    submitSearchForm = e => {
        e.preventDefault();
        this.state.company_id > 0 && this.props.searchCompanyComplaints(this.state.company_id);
    }

    // for company autosuggest
    onChange = (e, { newValue }) => this.setState({ company_value: newValue });

    updateCompanyId = id => this.setState({ company_id: id });

    render() {
        const { isLoggedIn, company_value } = this.state;
        const value = company_value;
        const inputProps = {
            name: 'company_name',
            placeholder: 'Name of Organisation...',
            value,
            className: 'form-control',
            onChange: this.onChange,
            required: 'required'
        };
        let menu, nav;

        if (isLoggedIn) {
            let user = User.getUserData();

            menu = <div className="avatar pull-right dropdown">
                <b className="caret"></b> <Link data-toggle="dropdown" to="#"><img src={user.Photo_url || 'https://s3.amazonaws.com/angryusers-images/angry.jpg'} alt={user.Fullname} title={user.Fullname} /></Link>
                <ul className="dropdown-menu" role="menu">
                    {/* <li role="presentation"><a role="menuitem" tabIndex="-1" href="">My Complaints</a></li> */}
                    <li role="presentation"><Link role="menuitem" tabIndex="-3" to="/" onClick={this.logOut}>Log Out</Link></li>
                </ul>
            </div>;
        } else {
            menu = <div className="avatar pull-right dropdown">
                <b className="caret"></b> <Link data-toggle="dropdown" to="#"><img src={avatar} alt="" /></Link>
                <ul className="dropdown-menu" role="menu">
                    <li role="presentation"><Link to="" role="menuitem" onClick={this.showLoginModal}>Login</Link></li>
                </ul>
            </div>;
        }

        if (this.props.nav === true) {
            let logo_div = <Link className="navbar-brand" to="/"><img src={logo} className="nav-logo" alt="AngryUsers Logo" /></Link>;

            nav = <div className="">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed btn btn-default" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        {/* <span class="icon-bar"></span> */}
                        <i className="fa fa-list fa-lg"></i> &nbsp; Menu
                    </button>
                    { logo_div }
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/whyangryusers">Why AngryUsers</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                    </ul>
                </div>
            </div>;
        } else {
            let logo_div = <div className="col-xs-5 col-sm-5 col-md-5"><Link to="/"><img src={logo} className="logo" alt="AngryUsers Logo" /></Link></div>;

            nav = <div className="row">
                    { logo_div }

                <div className="search col-md-4 col-sm12 col-xs-12">
                    <div className="wrap">
                        <form method="post" className="form" onSubmit={this.submitSearchForm}>
                            <div className="pull-left txt">
                                {/* <input type="text" className="form-control" placeholder="Search for Organisation, brand or website" /> */}
                                <CompanyAutosuggest inputProps={inputProps} updateCompanyId={this.updateCompanyId} />
                            </div>
                            <div className="pull-right"><button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button></div>
                            <div className="clearfix"></div>
                        </form>
                    </div>
                </div>
                <div className="col-md-3 col-xs-12 avt">
                    <div className="stnt pull-left">
                        <button className="btn btn-primary" onClick={this.props.showComplaintForm}>Share Complaint</button>
                    </div>

                    {menu}
                    <div className="env pull-right hidden"><i className="fa fa-envelope"></i></div>
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
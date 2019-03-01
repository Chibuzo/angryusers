import React, { Component } from "react";
import {Link} from "react-router-dom";

import UserInfo from "./UserInfoThumb";
import avatar from "../images/angry.jpg";

class ComplaintIntro extends Component {
    render() {
        let user = this.props.anonymous ? { Fullname: 'AngryUser', Photo_url: avatar } : this.props.user;
        return(
            <div className="post">
                <div className="wrap-ut pull-left">
                    <UserInfo user={user} />

                    <div className="posttext col-md-10">
                        <h1>{this.props.company.CompanyName}</h1>
                        <h2><Link to={`/complaint/${this.props.id}/${this.props.title.split(' ').join('-')}`}>{this.props.title}</Link></h2>
                        <p>{this.props.complaint}</p>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="postinfo pull-left">
                    <div className="comments">
                        <div className="commentbg">
                            {this.props.comments}
                            <div className="mark"></div>
                        </div>
            
                    </div>
                    <div className="views"><i className="fa fa-eye"></i> &nbsp;{this.props.views}</div>
                    <div className="time">{this.props.postdate} ago</div>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}

export default ComplaintIntro;
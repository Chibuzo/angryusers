import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserInfo from "./CommentUserThumb";
import avatar from "../images/angry.jpg";


class Comment extends Component {

    componentDidMount() {
        
    }

    render() {
        let user = this.props.anonymous ? { Fullname: 'Anonymous', Photo_url: avatar } : this.props.user;

        return (
            <div>
                <div className="col-md-1 col-xs-1">
                    <UserInfo user={user} />
                </div>

                <div className="comment col-md-11 col-xs-11 pull-right" style={{ whiteSpace: 'pre-wrap', width: '90.666667%' }}>
                    <p className="name">{user.Fullname}</p>
                    <p>{this.props.comment}</p>
                    <br />
                    <div className="col-md-9 col-xs-7 pull-right post-details-link text-right" style={{ fontSize: '13px' }}>
                        <Link to="#" onClick={this.reportPost} title="Report this post">Report</Link>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}

export default Comment;
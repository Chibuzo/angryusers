import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfoThumb";
import avatar from "../images/angry.jpg";
import FbShare from "./SocialPlugins/FbShare";
import Tweet from "./SocialPlugins/Tweet";
import User from "../Helpers/User";

import LightBox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

let images = [];
class FullComplaint extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postImage: 0,
            photoIndex: 0,
            isOpen: false,
        }
    }

    componentDidMount() {
        window.FB && window.FB.XFBML.parse();
        window.twttr && window.twttr.widgets && window.twttr.widgets.load();

        if (this.props.files && this.props.files.length > 0) {
            images = this.props.files.map(file => file.Filename);
            this.setState({ postImage: this.props.files.length });
        }
    }

    reportPost = () => {
        //fetch user details
        let user = null;
        if (Object.keys(User.getUserData()).length < 1) {
            this.props.showLoginModal(true);
            return;
        }
        user = User.getUserData();
        this.props.triggerFlag({ userId: user.Id, postTitle: this.props.title, postId: this.props.id, postType: 'complaint' });
    }

    render() {
        const user = this.props.anonymous ? { Fullname: 'Anonymous', Photo_url: avatar } : this.props.user;
        const { photoIndex, isOpen } = this.state;

        return(
            <div className="post">
                <div className="topwrap">
                    <div className="">
                        <div className="posthead col-md-12 col-xs-12">
                            <h1>{this.props.company.CompanyName}</h1>
                            <h2><Link to={this.props.url}>{this.props.title}</Link></h2>
                        </div>

                        <UserInfo user={user} date={this.props.postdate} />
                    </div>

                    <div className="posttext col-md-12 col-xs-12" style={{ whiteSpace: 'pre-wrap' }}>
                        <p>{this.props.complaint}</p>
                        <br />
                        { this.props.company && 
                            <div>
                                <FbShare url={this.props.url} />&nbsp;<Tweet url={this.props.url} />
                            </div> 
                        }
                        
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="postinfobot">
                    <div className="col-md-3 col-xs-5">
                        {this.state.postImage > 0 && <button type="button" className="btn btn-default" onClick={() => this.setState({ isOpen: true })}><i className="fa fa-image"></i> View Files</button> }
                    </div>

                    <div className="col-md-9 col-xs-7 post-details-link text-right" style={{ fontSize: '13px' }}>
                        {this.props.comments} Comments <strong>.</strong>&nbsp;
                        <Link to="#" onClick={this.reportPost} title="Report this post">Report</Link>
                    </div>
            
                    <div className="clearfix"></div>
                </div>

                { isOpen && (
                    <LightBox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default FullComplaint;
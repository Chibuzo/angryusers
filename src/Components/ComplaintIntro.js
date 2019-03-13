import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfoThumb";
import LightBox from "react-image-lightbox";
import avatar from "../images/angry.jpg";

class ComplaintIntro extends Component {
    constructor(props) {
        super(props);

        this.state = { complaint: '', more_link: 'Read more' };
    }

    componentDidMount() {
        this.setState({ complaint: this.props.intro });

        // if (this.props.files && this.props.files.length > 0) {
        //     images = this.props.files.map(file => file.Filename);
        //     this.setState({ postImage: this.props.files.length });
        // }
    }

    showFullPost = e => {
        e.preventDefault();
        
        this.state.more_link === 'Read more' ?
            this.setState({ complaint: this.props.complaint, more_link: 'Read less' })
        :
            this.setState({ complaint: this.props.intro, more_link: 'Read more' });
    }

    render() {
        let user = this.props.anonymous ? { Fullname: 'AngryUser', Photo_url: avatar } : this.props.user;
        const { complaint, more_link } = this.state;

        return(
            <div className="post">
                <div className="wrap-ut pullleft">
                    <UserInfo user={user} />

                    <div className="posttext col-md-10">
                        <h1>{this.props.company.CompanyName}</h1>
                        <h2><Link to={`/complaint/${this.props.id}/${this.props.title.replace(/["'.,/]+/g, "").split(' ').join('-')}`}>{this.props.title}</Link></h2>
                        {/* <h2>{this.props.title}</h2> */}
                        <p>{complaint}<strong><Link to="" onClick={this.showFullPost}>{ more_link }</Link></strong></p>
                    </div>
                    <div className="clearfix"></div>
                </div>
                {/* <div className="postinfo pull-left">
                    <div className="comments">
                        <div className="commentbg">
                            {this.props.comments}
                            <div className="mark"></div>
                        </div>
            
                    </div>
                    <div className="views"><i className="fa fa-eye"></i> &nbsp;{this.props.views}</div>
                    <div className="time">{this.props.postdate} ago</div>
                </div> */}
                <div className="postinfobot">

                    <div className="posted pull-left"><i className="fa fa-clock"></i> Posted on : {this.props.postdate}</div>

                    <div className="next pull-right">
                        {this.state.postImage > 0 && <button type="button" className="btn btn-default" onClick={() => this.setState({ isOpen: true })}><i className="fa fa-image"></i> View Files</button>}

                        &nbsp; &nbsp;<span title="Share this content" className="hidden"><i className="fa fa-share fa-1x"></i></span>

                        <span title="Flag this content" className="hidden"><i className="fa fa-flag"></i></span>
                    </div>

                    <div className="clearfix"></div>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}

export default ComplaintIntro;
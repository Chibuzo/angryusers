import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfoThumb";
import avatar from "../images/angry.jpg";
import User from "../Helpers/User";

class ComplaintIntro extends Component {
    constructor(props) {
        super(props);

        this.state = { complaint: '', more_link: 'Read more', show_read_more: false, contain_files: false, formating: {} };
    }

    componentDidMount() {
        let read_more = false;
    
        if (this.props.intro.length >= 350) read_more = true;
        this.setState({ complaint: this.props.intro, show_read_more: read_more });

        if (this.props.files && this.props.files.length > 0) {
            this.setState({ contain_files: true });
        }
    }

    showFullPost = e => {
        e.preventDefault();
        
        this.state.more_link === 'Read more' ?
            this.setState({ complaint: this.props.complaint, more_link: 'Read less', formating: { whiteSpace: 'pre-wrap' } })
        :
            this.setState({ complaint: this.props.intro, more_link: 'Read more', formating: {} });    
    }

    loadImages = () => {
        const images = this.props.files.map(file => file.Filename);
        this.props.sendImages(images);
    }

    reportPost = () => {
        //fetch user details
        if (Object.keys(User.getUserData()).length > 0) {
            User.getUserData();
        } else {
            this.props.showLoginModal(true);
            return;
        }
        console.log('Post: ' + this.props.id + ' Reported!')
    }

    render() {
        let user = this.props.anonymous ? { Fullname: 'Anonymous', Photo_url: avatar } : this.props.user;
        const { complaint, more_link, show_read_more, contain_files, formating } = this.state;

        return(
            <div className="post">
                <div className="wrap-ut pullleft">

                    <div className="">
                        <div className="posthead col-md-12 col-xs-12">
                            <h1>{this.props.company.CompanyName}</h1>
                            <h2><Link to={this.props.url}>{this.props.title}</Link></h2>
                        </div>

                        <UserInfo user={user} date={this.props.postdate} />
                    </div>
                    <div className="posttext col-md-12 pull-right col-xs-12" style={formating}>
                        <p>{complaint} { show_read_more && <strong><Link to="" onClick={this.showFullPost}>{ more_link }</Link></strong> }</p>
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
                    <div className="col-md-3 col-xs-5">
                        { contain_files && <button type="button" className="btn btn-default" onClick={this.loadImages}><i className="fa fa-image"></i> View Files</button>}
                    </div>

                    <div className="col-md-9 col-xs-7 post-details-link text-right" style={{ fontSize: '13px' }}>
                        <Link to={this.props.url}>{this.props.comments} Comments</Link> <strong>.</strong>&nbsp; 
                        <Link to="#" onClick={this.reportPost} title="Report this post">Report</Link>
                    </div>

                    <div className="clearfix"></div>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}

export default ComplaintIntro;
import React, {Component} from "react";

import SearchBar from "./SearchBar";
import ComplaintForm from "./ComplaintForm";
import Complaint from "./FullComplaint";
import CommentWrapper from "./Comments";
import Comment from "./Comment";
import FlagPost from "./FlagPost";
import RecentPosts from "./Blog/RecentPosts";
import Categories from "./Blog/BlogCategories";
import Footer from "./Footer";
import LoginModal from "./LoginModal";
import { Helmet } from "react-helmet";

import Notification, { notify } from 'react-notify-toast';

import User from "../Helpers/User";

const post_utilities = require('../Helpers/PostUtilities');

class ComplaintPage extends Component {
    constructor(props) {
        super(props);

        this.state = { show_complain_form: false, complaint: '', complaint_data: {}, url: '', comments: [], modal_toggle: false, new_comment: {}, show_new_comment: false,
            flag: { postTitle: '', postId: 0, postType: '', userId: 0, visible: false }  };
    }

    toggleComplaintForm = () => {
        if (this.state.show_complain_form === true) {
            this.setState({ show_complain_form: false });
        } else {
            this.setState({ show_complain_form: true });
        }
    }

    componentDidMount() {
        notify.show('Fetching selected angry bout, in a moment...');
       
        // fetch complaints
        fetch(process.env.REACT_APP_API_URL + 'complaints/' + this.props.match.params.id).then(function(response) {
            return response.json();
        }).then(rant => {
            //document.title = rant.Title + ' . AngryUsers';
            
            const url = process.env.REACT_APP_BASEURL + `/complaint/${rant.Id}/${rant.Company.CompanyName.replace(/["'.,/]+/g, "").split(' ').join('-')}_${rant.Title.replace(/["'.,/]+/g, "").split(' ').join('-')}`;
            const complaint = <Complaint 
                                id={rant.Id} 
                                company={rant.Company} 
                                title={rant.Title} 
                                anonymous={rant.Anonymous} 
                                complaint={rant.Issue} 
                                comments={rant.Comments.length} 
                                postdate={post_utilities.formatDate(rant.IssueDate)} 
                                files={rant.ComplaintFiles} 
                                url={url} 
                                user={rant.User} 
                                showLoginModal={this.showLoginModal}
                                triggerFlag={this.flagComplaint} />

            let comments = rant.Comments && rant.Comments.map(comment => {
                return (
                    <Comment 
                        id={comment.Id} 
                        comment={comment.Body} 
                        user={comment.User} 
                        postdate={post_utilities.formatDateSince(comment.DatePosted)} 
                        key={comment.Id} 
                        showLoginModal={() => this.props.triggerLogin}
                    />
                );
            });

            // set page title
            //document.title = rant.Title;

            this.setState({ complaint: complaint, comments: comments, complaint_data: rant, url: url });
            notify.hide();
        });
    }


    updateComment = (comment) => {
        let comments = this.state.comments;
        comments.push(
            <Comment id={0} comment={comment.Body} user={User.getUserData()} postdate={post_utilities.formatDateSince(comment.DatePosted)} key={1} />
        );
        this.setState({ comments: comments });
    }

    showLoginModal = (val) => {
        this.setState({ modal_toggle: val });
    }

    flagComplaint = flag => {
        flag.visible = true;
        this.setState({ flag: flag });
    }

    render() {
        const flag = this.state.flag; 

        return(
            <div className="container-fluid">
                {/* <Banner /> */}
                <Helmet>
                    <title>{this.state.complaint_data.Title && this.state.complaint_data.Title}</title>
                    <meta property="og:title" content={this.state.complaint_data.Title} />
                    <meta property="og:url" content={this.state.url} />
                    {/* <meta property="og:description" content={this.state.complaint_data.Title} /> */}
                    <meta property="og:type" content="website" />
                </Helmet>

                <SearchBar showComplaintForm={this.toggleComplaintForm} triggerLogin={this.showLoginModal} />
                <Notification options={{ timeout: -1 }} />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                { this.state.show_complain_form && <ComplaintForm toggleForm={this.toggleComplaintForm} showNotification={this.newPostNotification} showLoginOpts={this.showLoginModal} /> }    
                                { this.state.complaint }

            { this.state.complaint && <CommentWrapper complaintId={this.state.complaint_data.Id} triggerLogin={this.showLoginModal} sendNewComment={this.updateComment}>{this.state.comments}</CommentWrapper> }

                                { this.state.show_new_comment && <Complaint 
                                    complaint={this.state.new_comment.comment} 
                                    postdate={post_utilities.formatDate(this.state.new_comment.date)} 
                                    user={User.getUserData()}
                                />}
                                {/* { typeof this.state.complaint === 'object' && <CommentBox complaintId={this.props.match.params.id} sendNewComment={this.updateComment} showLoginOpts={this.showLoginModal} /> } */}
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <RecentPosts />
                                <Categories />
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />

                <FlagPost postId={flag.postId} postTitle={flag.postTitle} postType={flag.postType} userId={flag.userId} visible={flag.visible} hideVisibilty={() => this.setState({ flag: { visible: false } })} />

                <LoginModal controlModal={this.state.modal_toggle} onClose={this.showLoginModal} />
            </div>
        );
    }
}

export default ComplaintPage
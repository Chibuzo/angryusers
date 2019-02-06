import React, {Component} from "react";

//import Banner from "./Banner";
import SearchBar from "./SearchBar";
import ComplaintForm from "./ComplaintForm";
import Complaint from "./FullComplaint";
import CommentBox from "./CommentForm";
import SideBarWidget from "./SideBarWidget";
import Footer from "./Footer";
import LoginModal from "./LoginModal";

import Notification, { notify } from 'react-notify-toast';

import User from "../Helpers/User";

const post_utilities = require('../Helpers/PostUtilities');

class ComplaintPage extends Component {
    constructor(props) {
        super(props);

        this.state = { show_complain_form: false, complaint: '', comments: '', modal_toggle: false, new_comment: {}, show_new_comment: false };
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
            let complaint = <Complaint id={rant.Id} company={rant.Company} title={rant.Title} complaint={rant.Issue} postdate={post_utilities.formatDate(rant.IssueDate)} files={rant.ComplaintFiles} key={rant.CreatedAt} user={rant.User} />
            let comments = rant.Comments && rant.Comments.map(comment => {
                return (<Complaint id={comment.Id} complaint={comment.Body} user={comment.User} postdate={post_utilities.formatDate(comment.DatePosted)} key={comment.DatePosted} />);
            });

            // set page title
            document.title = rant.Title;

            this.setState({ complaint: complaint, comments: comments });
            notify.hide();
        });
    }


    updateComment = (comment) => {
        this.setState({
            new_comment: {
                comment: comment.Body,
                date: comment.DatePosted
            },
            show_new_comment: true
        });
    }

    showLoginModal = () => {
        this.setState({ modal_toggle: true });
    }

    render() {
        return(
            <div className="container-fluid">
                {/* <Banner /> */}
                <SearchBar showComplaintForm={this.toggleComplaintForm} triggerLogin={this.showLoginModal} />
                <Notification options={{ timeout: -1 }} />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                {this.state.show_complain_form && <ComplaintForm toggleForm={this.toggleComplaintForm} showNotification={this.newPostNotification} showLoginOpts={this.showLoginModal} /> }    
                                { this.state.complaint }
                                { this.state.comments }
                                { this.state.show_new_comment && <Complaint 
                                    complaint={this.state.new_comment.comment} 
                                    postdate={post_utilities.formatDate(this.state.new_comment.date)} 
                                    user={User.getUserData()}
                                    key={this.state.new_comment.date} 
                                />}
                                {this.state.complaint.length > 10 && <CommentBox complaintId={this.props.match.params.id} user={User.getUserData()} sendNewComment={this.updateComment} showLoginOpts={this.showLoginModal} /> }
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <SideBarWidget />
                                <SideBarWidget />
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />

                {this.state.modal_toggle && <LoginModal />}
            </div>
        );
    }
}

export default ComplaintPage
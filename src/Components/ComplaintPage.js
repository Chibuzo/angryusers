import React, {Component} from "react";

import Banner from "./Banner";
import SearchBar from "./SearchBar";
import ComplaintForm from "./ComplaintForm";
import Complaint from "./FullComplaint";
import CommentBox from "./CommentForm";
import SideBarWidget from "./SideBarWidget";
import Footer from "./Footer";

const post_utilities = require('../utilities/PostUtilities');

class ComplaintPage extends Component {
    state = { show_complain_form: false, complaint: '', comments: '' };

    toggleComplaintForm = () => {
        if (this.state.show_complain_form === true) {
            this.setState({ show_complain_form: false });
        } else {
            this.setState({ show_complain_form: true });
        }
    }

    componentDidMount() {
        // fetch complaints
        fetch(process.env.REACT_APP_API_URL + 'complaints/' + this.props.match.params.id).then(function(response) {
            return response.json();
        }).then(rant => {
            let complaint = <Complaint id={rant.Id} title={rant.Title} complaint={rant.Issue} postdate={post_utilities.formatDate(rant.IssueDate)} key={rant.IssueDate} />
            let comments = rant.Comments.map(comment => {
                return (<Complaint id={comment.Id} complaint={comment.Body} postdate={post_utilities.formatDate(comment.DatePosted)} key={comment.DatePosted} />);
            });
            this.setState({ complaint: complaint, comments: comments });
        });
    }

    render() {
        return(
            <div className="container-fluid">
                <Banner />
                <SearchBar showComplaintForm={this.toggleComplaintForm} />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                { this.state.show_complain_form && <ComplaintForm toggleForm={this.toggleComplaintForm} /> }    
                                { this.state.complaint }
                                { this.state.comments }
                                <CommentBox complaintId={this.props.match.params.id} />
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <SideBarWidget />
                                <SideBarWidget />
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
}

export default ComplaintPage
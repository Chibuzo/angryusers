import React, { Component } from "react";

import Banner from "./Banner";
import SearchBar from "./SearchBar";
import ComplaintForm from "./ComplaintForm";
import ComplaintIntro from "./ComplaintIntro";
import SideBarWidget from "./SideBarWidget";
import Footer from "./Footer";
import LoginModal from "./LoginModal";

//import User from "../Helpers/User";

const post_utilities = require('../Helpers/PostUtilities');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { show_complain_form: false, complaints: [], newComplaint: {}, new_complaint: false, modal_toggle: false, User: null, show_login_modal: false };
    }

    toggleComplaintForm = () => {
        if (this.state.show_complain_form === true) {
            this.setState({ show_complain_form: false });
        } else {
            this.setState({ show_complain_form: true });
        }
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + 'complaints').then(function(response) {
            return response.json();
        }).then(res => {
            let complaints = res.map(rant => {
                return (
                    <ComplaintIntro 
                        id={rant.Id} 
                        title={rant.Title} 
                        complaint={post_utilities.postIntro(rant.Issue)} 
                        postdate={post_utilities.formatDateSince(rant.CreatedAt)} 
                        comments={rant.Comments.length} key={rant.IssueDate} 
                    />
                );
            });
            document.title = "Angry Users - Public compilation of angry users' stories";
            this.setState({ complaints: complaints });
        }).catch(err => {
            console.log(err);
        });
    }

    // Update complaint list with new complaint
    repostNewPost(new_complaint) {
        this.setState({ 
            newComplaint: {
                Id: new_complaint.Id,
                Title: new_complaint.Title,
                Issue: new_complaint.Issue,
                CreatedAt: new Date().toISOString(),
            },
            new_complaint: true
        });
    }

    showLoginModal = () => {
        this.setState({ modal_toggle: true });
    }

    render() {
        return(
            <div className="container-fluid">
                <Banner />
                <SearchBar showComplaintForm={this.toggleComplaintForm} userInfo={this.state.User} />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                {this.state.show_complain_form && <ComplaintForm toggleForm={this.toggleComplaintForm} sendNewComplaint={this.repostNewPost.bind(this)} showLoginOpts={this.showLoginModal} /> }
                               
                                {this.state.new_complaint && <ComplaintIntro
                                    id={this.state.newComplaint.Id}
                                    title={this.state.newComplaint.Title}
                                    complaint={post_utilities.postIntro(this.state.newComplaint.Issue)}
                                    postdate={post_utilities.formatDateSince(this.state.newComplaint.CreatedAt)}
                                    comments='0' 
                                    key={this.state.newComplaint.CreatedAt}
                                /> }

                                { this.state.complaints }
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <SideBarWidget />
                                <SideBarWidget />
                            </div>
                        </div>
                    </div>
                </section>

                <button onClick={this.openModal} className="btn btn-danger">
                    Right Sidebar
                </button>

                <Footer />

                { this.state.modal_toggle && <LoginModal /> }
            </div>
        );
    }
}

export default Home;
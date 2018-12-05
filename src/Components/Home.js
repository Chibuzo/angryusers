import React, { Component } from "react";

import Banner from "./Banner";
import SearchBar from "./SearchBar";
import ComplaintForm from "./ComplaintForm";
import ComplaintIntro from "./ComplaintIntro";
import SideBarWidget from "./SideBarWidget";
import Footer from "./Footer";

const post_utilities = require('../utilities/PostUtilities');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { show_complain_form: false, complaints: [], new_complaint: false };
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
                    <ComplaintIntro id={rant.Id} title={rant.Title} complaint={rant.Issue} postdate={post_utilities.formatDateSince(rant.IssueDate)} comments={rant.Comments.length} key={rant.IssueDate} />
                );
            });
            this.setState({ complaints: complaints });
        }).catch(err => {
            console.log(err);
        });
    }

    repostNewPost(postData) {
        console.log(postData)
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
                                { this.state.new_complaint && <ComplaintIntro newPostData={this.repostNewPost.bind(this)} /> }
                                { this.state.complaints }
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

export default Home;
import React, { Component } from "react";

import Banner from "./Banner";
import SearchBar from "./SearchBar";
import ComplaintForm from "./ComplaintForm";
import ComplaintIntro from "./ComplaintIntro";
// import StatWidget from "./StatWidget";
import RecentPosts from "./Blog/RecentPosts";
import BlogCategories from "./Blog/BlogCategories";
import Footer from "./Footer";

import Notification, { notify } from 'react-notify-toast';
import LightBox from "react-image-lightbox";
import LoginModal from "./LoginModal";

import User from "../Helpers/User";

const post_utilities = require('../Helpers/PostUtilities');

let images = [];
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_complain_form: false, complaints: [], newComplaint: {}, new_complaint: false, modal_toggle: null, update_login_view: false, 
            post_files: { postImage: 0, photoIndex: 0, isOpen: false, }};
    }

    toggleComplaintForm = () => {
        if (this.state.show_complain_form === true) {
            this.setState({ show_complain_form: false });
        } else {
            this.setState({ show_complain_form: true });
        }
    }

    componentDidMount() {
        notify.show('Loading recent complaints, in a moment...');

        fetch(process.env.REACT_APP_API_URL + 'complaints').then(function(response) {
            return response.json();
        }).then(res => {
            let complaints = res.map(rant => {
                return (
                    <ComplaintIntro 
                        id={rant.Id} 
                        company={rant.Company}
                        title={rant.Title} 
                        intro={post_utilities.postIntro(rant.Issue)} 
                        complaint={rant.Issue}
                        postdate={post_utilities.formatDateSince(rant.CreatedAt)} 
                        files={rant.ComplaintFiles}
                        // comments={rant.Comments.length} 
                        key={rant.IssueDate} 
                        views={rant.ViewCount}
                        anonymous={rant.Anonymous}
                        user={rant.User}
                        sendImages={this.loadImages}
                        // onTouchEnd={() => alert() }
                    />
                );
            });
            document.title = "AngryUsers - Public compilation of angry users' stories";
            this.setState({ complaints: complaints });
            notify.hide();
        }).catch(err => {
            console.log(err);
        });
    }

    // Update complaint list with new complaint
    repostNewPost(new_complaint) {
        this.setState({ 
            newComplaint: {
                Id: new_complaint.Id,
                Company: { CompanyName: new_complaint.CompanyName },
                Title: new_complaint.Title,
                Issue: new_complaint.Issue,
                CreatedAt: new Date().toISOString(),
            },
            new_complaint: true
        });
    }

    loadImages = (imgs) => {
        images = imgs;
        this.setState({ post_files: { postImage: images.length, isOpen: true, photoIndex: 0 }});
    }

    showLoginModal = (val) => {
        this.setState({ modal_toggle: val });
    }

    updateLoginView = (val) => {
        this.setState({ update_login_view: true });
    }

    render() {
        const { photoIndex, isOpen } = this.state.post_files;

        return(
            <div className="container-fluid">
                <Banner />
                <SearchBar showComplaintForm={this.toggleComplaintForm} triggerLogin={this.showLoginModal} updateUserView={this.state.update_login_view} />
                <Notification options={{ timeout: -1 }} />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                {this.state.show_complain_form && <ComplaintForm toggleForm={this.toggleComplaintForm} sendNewComplaint={this.repostNewPost.bind(this)} showLoginOpts={this.showLoginModal} /> }
                               
                                {this.state.new_complaint && <ComplaintIntro
                                    id={this.state.newComplaint.Id}
                                    company={this.state.newComplaint.Company}
                                    title={this.state.newComplaint.Title}
                                    intrp={post_utilities.postIntro(this.state.newComplaint.Issue)}
                                    complaint={this.state.newComplaint.Issue}
                                    postdate={post_utilities.formatDateSince(this.state.newComplaint.CreatedAt)}
                                    comments='0' 
                                    views='0'
                                    key={this.state.newComplaint.CreatedAt}
                                    user={User.getUserData()}
                                    sendImages={this.loadImages}
                                    // onTapEnd={this.openComplaint(this.state)}
                                /> }

                                { this.state.complaints }
                            </div>

                            <div className="col-lg-4 col-md-4">
                                {/* <StatWidget /> */}
                                <RecentPosts />
                                <BlogCategories />
                            </div>
                        </div>
                    </div>
                </section>

                {isOpen && (
                    <LightBox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ post_files: { isOpen: false }})}
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

                <Footer />

                <LoginModal controlModal={this.state.modal_toggle} onClose={this.showLoginModal} triggerLoginAction={this.updateLoginView} />
            </div>
        );
    }
}

export default Home;
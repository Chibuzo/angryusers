import React, { Component } from "react";

import Banner from "./Banner";
import SearchBar from "./SearchBar";
import ComplaintForm from "./ComplaintForm";
import ComplaintIntro from "./ComplaintIntro";
// import StatWidget from "./StatWidget";
import TagWidget from "./TagWidget";
import RecentPosts from "./Blog/RecentPosts";
import BlogCategories from "./Blog/BlogCategories";
import Footer from "./Footer";

import Notification, { notify } from 'react-notify-toast';
import FlagPost from "./FlagPost";
import LightBox from "react-image-lightbox";
import LoginModal from "./LoginModal";

import User from "../Helpers/User";

const post_utilities = require('../Helpers/PostUtilities');

const fetchComplaints = async ($this, path) => {
    try {
        const res = await fetch(process.env.REACT_APP_API_URL + path);
        const data = await res.json();
    
        let complaints = data.map(rant => {
            //const doc_title = rant.Company.CompanyName + ' - ' + rant.Title;
            return (
                <ComplaintIntro
                    id={rant.Id}
                    company={rant.Company}
                    title={rant.Title}
                    intro={post_utilities.postIntro(rant.Issue, 360)}
                    complaint={rant.Issue}
                    postdate={post_utilities.formatDate(rant.CreatedAt)}
                    files={rant.ComplaintFiles}
                    comments={rant.Comments.length}
                    key={rant.IssueDate}
                    views={rant.ViewCount}
                    url={`/complaint/${rant.Id}/${rant.Company.CompanyName.replace(/["'.,/]+/g, "").split(' ').join('-')}_${rant.Title.replace(/["'.,/]+/g, "").split(' ').join('-')}`}
                    anonymous={rant.Anonymous}
                    user={rant.User}
                    sendImages={$this.loadImages}
                    showLoginModal={$this.showLoginModal}
                    triggerFlag={$this.flagComplaint}
                // onTouchEnd={() => alert() }
                />
            );
        });
        return complaints;
    } catch (err) {
        console.log(err)
    }
}

let images = [];
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_complain_form: false, complaints: [], newComplaint: {}, new_complaint: false, modal_toggle: null, update_login_view: false, 
            post_files: { postImage: 0, photoIndex: 0, isOpen: false, }, 
            mFilter: { caret: 'fa-caret-right', tagwidget: false },
            flag: { postTitle: '', postId: 0, postType: '', userId: 0, visible: false } 
        };
    }

    toggleComplaintForm = () => {
        if (this.state.show_complain_form === true) {
            this.setState({ show_complain_form: false });
        } else {
            this.setState({ show_complain_form: true });
        }
    }

    async componentDidMount() {
        document.title = "AngryUsers - Public compilation of angry customers/users' stories";
        notify.show('Loading recent complaints, in a moment...');

        const complaints = await fetchComplaints(this, 'complaints');
        this.setState({ complaints: complaints });
        notify.hide();
    }

    filterComplaint = async tag => {
        notify.show('Loading complaints under ' + tag + ' category, please wait...');

        try {
            let complaints = await fetchComplaints(this, 'complaints/getComplaintsByTag/' + escape(tag));
            if (complaints.length < 1) {
                complaints = <div className="post"><div className="wrap-ut"><div><div className="posthead col-md-12 col-xs-12"></div><div className='alert'><h1>No Content Found!</h1>No complaint has being submitted under this tag category yet. You may want to select a related tag<br /><br /></div></div></div></div>;
            }
            this.state.mFilter.tagwidget === true ? this.setState({ complaints: complaints, mFilter: { caret: 'fa-caret-right', tagwidget: false } }) : this.setState({ complaints: complaints });
        } catch (err) {
            console.error(err);
        }
        notify.hide();
    }

    findCompanyComplaints = async company => {
        notify.show('Loading complaints against the selected company, please wait...');
        try {
            let complaints = await fetchComplaints(this, 'complaints/getComplaintsByCompany/' + escape(company));
            if (complaints.length < 1) {
                complaints = <div className="post"><div className="wrap-ut"><div><div className="posthead col-md-12 col-xs-12"></div><div className='alert'><h1>No Content Found!</h1>No complaint has being submitted against this company yet. You may want to select a related tag<br /><br /></div></div></div></div>;
            }
            this.setState({ complaints: complaints });
        } catch (err) {
            console.error(err);
        }
        notify.hide();
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
        console.log(imgs.length)
        this.setState({ post_files: { postImage: imgs.length, isOpen: true, photoIndex: 0 }});
    }

    showLoginModal = (val) => {
        this.setState({ modal_toggle: val });
    }

    updateLoginView = (val) => {
        this.setState({ update_login_view: true });
    }

    flagComplaint = flag => {
        flag.visible = true;
        this.setState({ flag: flag });
    }

    // only for mobile view
    showTags = () => {
        if (this.state.mFilter.tagwidget === false) {
            this.setState({ mFilter: { caret: 'fa-caret-down', tagwidget: true } });
        } else {
            this.setState({ mFilter: { caret: 'fa-caret-right', tagwidget: false } });
        }
    }

    render() {
        const { photoIndex, isOpen } = this.state.post_files;
        const mFilter = this.state.mFilter;
        const flag = this.state.flag;

        return(
            <div className="container-fluid">
                <Banner />
                <SearchBar showComplaintForm={this.toggleComplaintForm} triggerLogin={this.showLoginModal} updateUserView={this.state.update_login_view} searchCompanyComplaints={this.findCompanyComplaints} />
                <Notification options={{ timeout: -1 }} />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-xs-12">
                                <div className="row">
                                    <div className="col-md-12 d-block d-sm-none"><span onClick={this.showTags} style={{ padding: '4px', position: 'relative', top: '-15px' }}><i className="fa fa-filter"></i> &nbsp;Filter Complaints &nbsp;<i className={'fa ' + mFilter.caret }></i></span> <br /></div>
                                    <div className="clearfix"></div>
                                    { mFilter.tagwidget && <TagWidget filterComplaint={this.filterComplaint} /> }
                                </div>

                                <div className="row">
                                    {this.state.show_complain_form && <ComplaintForm toggleForm={this.toggleComplaintForm} sendNewComplaint={this.repostNewPost.bind(this)} showLoginOpts={this.showLoginModal} /> }
                                </div>       

                                <div className="row">
                                    {this.state.new_complaint && <ComplaintIntro
                                        id={this.state.newComplaint.Id}
                                        company={this.state.newComplaint.Company}
                                        title={this.state.newComplaint.Title}
                                        intro={post_utilities.postIntro(this.state.newComplaint.Issue, 350)}
                                        complaint={this.state.newComplaint.Issue}
                                        postdate={post_utilities.formatDate(this.state.newComplaint.CreatedAt)}
                                        comments='0'            
                                        views='0'
                                        url={`/complaint/${this.state.newComplaint.Id}/${this.state.newComplaint.Title.replace(/["'.,/]+/g, "").split(' ').join('-')}`}
                                        key={this.state.newComplaint.CreatedAt}
                                        user={User.getUserData()}
                                        sendImages={this.loadImages}
                                        // onTapEnd={this.openComplaint(this.state)}
                                    /> }
                                </div>    

                                <div className="row">{ this.state.complaints }</div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-xs-12">
                                {/* <StatWidget /> */}
                                <TagWidget filterComplaint={this.filterComplaint} title={true} />
                                <RecentPosts />
                                <BlogCategories />
                            </div>
                        </div>
                    </div>
                </section>

                <FlagPost postId={flag.postId} postTitle={flag.postTitle} postType={flag.postType} userId={flag.userId} visible={flag.visible} hideVisibilty={() => this.setState({ flag: { visible: false }})} />

                { isOpen && (
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
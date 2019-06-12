import React, { Component } from "react";
import CompanyAutosuggest from "./CompanyAutosuggest";
import Tag from "./Tag";
import S3FileUpload from 'react-s3';
import User from "../Helpers/User";

const post_utilities = require('../Helpers/PostUtilities');

class ComplaintForm extends Component {
    constructor(props) {
        super(props);
        this.state = { company_value: '', company_id: 0, uploadFiles: [], post_btn: { text: 'Post Complaint', icon: 'fa-upload', disabled: '' }, modal_visibility: false };
    }

    submitComplaint = (e) => {
        e.preventDefault();

        //fetch user details
        let user;
        if (Object.keys(User.getUserData()).length > 0) {
            user = User.getUserData();
        } else {
            this.props.showLoginOpts(true);
            return;
        }

        // change post button state
        this.setState({ post_btn: { text: 'Posting...', icon: 'fa-redo fa-spin', disabled: 'disabled' }});

        // make sure tag(s) are included
        if (e.target.elements.tags.value.length < 2) {
            
        }
        
        const complaint = {
            Title: e.target.elements.title.value,
            Issue: e.target.elements.complaint.value,
            IssueDate: new Date().toISOString(),
            CompanyId: this.state.company_id,
            CompanyName: e.target.elements.company_name.value,
            Tags: e.target.elements.tags.value,
            FacebookShare: e.target.elements.fb_share.checked ? true : false,
            TwitterShare: e.target.elements.tw_share.checked ? true : false,
            Anonymous: e.target.elements.anonymous.checked ? true : false,
            Notify: e.target.elements.notify.checked ? true : false,
            UserId: user.Id
        };

        const review = {
            Legit: e.target.elements.legit.value === "1" ? true : false,
            GoodCustomerService: e.target.elements.customer_care.value === "1" ? true : false
        }

        fetch(process.env.REACT_APP_API_URL + 'complaints/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(complaint)
        }).then(res => {
            return res.json();
        }).then(data => {
            if (data.Success === true) {
                this.props.toggleForm();

                // Update the page with new complaint immediately
                complaint.Id = data.Id;
                this.props.sendNewComplaint && this.props.sendNewComplaint(complaint);

                // upload files if any
                this.state.uploadFiles.length > 0 && this.uploadFiles(data.Id);

                // share on social networks
                const link = process.env.REACT_APP_BASEURL + `complaint/${complaint.Id}/${complaint.CompanyName.replace(/["'.,/]+/g, "").split(' ').join('-')}_${complaint.Title.replace(/["'.,/]+/g, "").split(' ').join('-')}`;
                complaint.FacebookShare && post_utilities.postOnFb(post_utilities.postIntro(complaint.Issue), link);

                // send review
                review.ComplaintId = data.Id;
                review.CompanyId = this.state.company_id;
                this.postReview(review);
                
                this.setState({ post_btn: { text: 'Post Complaint', icon: 'fa-upload', disabled: '' }});
            }
        }).catch(err => {
            console.log(err);
            this.setState({ post_btn: { text: 'Post Complaint', icon: 'fa-upload', disabled: '' } });            
        });
    }

    getSelectedFiles = (e) => this.setState({ uploadFiles: e.target.files });

    uploadFiles = async (complaint_id) => {
        const config = {
            bucketName: 'angryusers-complaint-files',
            dirName: 'complaints',
            region: 'us-east-2',
            accessKeyId: process.env.REACT_APP_AWS_IAM_ACCESS_KEY,
            secretAccessKey: process.env.REACT_APP_AWS_IAM_SECRET,
        }

        let files = [];

        for (const file of this.state.uploadFiles) {
            const ext = file.name.split('.').pop();

            // first of all, this is insane but fuck it!
            Object.defineProperty(file, 'name', {
                writable: true,
                value: 'cp_' + new Date().getTime() + '.' + ext
            });

            try {
                const res = await S3FileUpload.uploadFile(file, config);
                files.push({ Filename: res.location, ComplaintId: complaint_id });
            } catch(err) {
                console.log(err)
            }
        }

        // save the location of uploaded files
        fetch(process.env.REACT_APP_API_URL + 'ComplaintFiles/SaveUploadedFiles', {
            method: 'POST',
            body: JSON.stringify(files),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
        }).catch(err => console.log(err));
    }

    postReview = (review) => {
        fetch(process.env.REACT_APP_API_URL + 'CompanyReviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        }).then(res => {
        }).catch(err => console.log(err));
    }

    // for company autosuggest
    onChange = (e, { newValue }) => this.setState({ company_value: newValue });

    updateCompanyId = id => this.setState({ company_id: id });
    
    closeModal() {
        this.setState({ modal_visibility: false });
    }

    render() {
        const value = this.state.company_value;

        const inputProps = {
            name: 'company_name',
            placeholder: 'Name of Organisation...',
            value,
            className: 'form-control',
            onChange: this.onChange,
            required: 'required'
        };

        return(
            <div className='post make-post'>
                <form className="form newtopic" method="post" onSubmit={this.submitComplaint}>
                    <div className="topwrap">
                        <div className="posttext col-md-12">
                            <CompanyAutosuggest inputProps={inputProps} updateCompanyId={this.updateCompanyId} />
                    
                            <div><input type="text" name="title" placeholder="Brief caption for your displeasure..." className="form-control" /></div>
                    
                            <div><textarea name="complaint" id="desc" placeholder="Full description of what happened" rows="10"  className="form-control"></textarea></div>

                            <div>
                                <label>Add Tags <small>Eg Bank, Tech, Ecommerce etc.</small> (At least one)</label>
                                <Tag />
                            </div>
                            <br />
                            <div>
                                <label>Include Evidence <small>if any</small> (Screenshots, receipts etc)</label>
                                <input type="file" name="files" onChange={this.getSelectedFiles} accept="image/*|audio/*|video/*" multiple />
                            </div>
                            
                            <div className="row hidden">
                                <div className="col-md-12"><label>Do you think this organisation is legit?</label></div>
                                <div className="col-md-4 col-xs-4"><input type="radio" name="legit" className="au-input-button" value="1" /> &nbsp;Yes</div>
                                <div className="col-md-4 col-xs-6"><input type="radio" name="legit" className="au-input-button" value="0" /> &nbsp;No</div>    
                            </div>

                            <div className="row hidden">
                                <div className="col-md-12"><label>How would you rate the customer service?</label></div>
                                <div className="col-md-4 col-xs-4"><input type="radio" name="customer_care" className="au-input-button" value="1" /> &nbsp;Good</div>
                                <div className="col-md-4 col-xs-6"><input type="radio" name="customer_care" className="au-input-button" value="0" /> &nbsp;Bad</div>
                            </div>

                            <input type="hidden" name="companyId" value="1" />
                            <br /><br />
                            <div className="row newtopcheckbox">
                                <div className="col-lg-12 col-md-12">
                                    <label>Share on AngryUsers' Social Networks</label>
                                </div>
                                                                  
                                <div className="col-md-4 col-xs-4">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="fb_share" id="fb"/> <i className="fab fa-facebook-square"></i>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-6">
                                    <div className="checkbox">
                                        <label><input type="checkbox" name="tw_share" id="tw" /> <i className="fab fa-twitter"></i></label>
                                    </div>
                                </div>
                            </div>

                            <div className="pull-right">Post as anonymous &nbsp; <input type="checkbox" name="anonymous" className="au-input-button" /></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="postinfobot">
                        <div className="pull-left" style={{ marginLeft: '10px' }}>
                            <label style={{ marginTop: '0' }}><input type="checkbox" name="notify" className="" /> &nbsp;Email me when some one post a reply</label>
                        </div>
                        <div className="pull-right postreply">
                            <div className="pull-left"><button type="submit" className="btn btn-primary" {...this.state.post_btn.disabled}><i className={"fa " + this.state.post_btn.icon}></i>&nbsp;&nbsp;{this.state.post_btn.text}</button></div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ComplaintForm;
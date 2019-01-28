import React, { Component } from "react";
import Autosuggest from 'react-autosuggest';

import User from "../Helpers/User";
import UserInfo from "./UserInfoThumb";

import '../css/autosuggest.css';

let companies = [];
const fetchCompanies = () => {
    fetch(process.env.REACT_APP_API_URL + 'companies').then(function(response) {
        return response.json();
    }).then(res => {
        companies = res.map(coy => {
            return { 'companyName': coy.CompanyName, 'id': coy.Id };
        });
    });
}

const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    
    return inputLength === 0 ? [] : companies.filter(coy =>
        coy.companyName.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const getSuggestionValue = suggestion => suggestion.companyName;

// render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.companyName}
  </div>
);

let companyId = 0;

class ComplaintForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', suggestions: [], uploadFiles: [], post_btn: { text: 'Post Complaint', icon: 'fa-upload', disabled: '' } };
    }

    submitComplaint = (e) => {
        e.preventDefault();

        // fetch user details
        let user;
        if (Object.keys(User.getUserData()).length > 0) {
            user = User.getUserData();
        } else {
            this.props.showLoginOpts();
            return;
        }

        // change post button state
        this.setState({ post_btn: { text: 'Posting...', icon: 'fa-redo fa-spin', disabled: 'disabled' }});

        const complaint = {
            Title: e.target.elements.title.value,
            Issue: e.target.elements.complaint.value,
            IssueDate: new Date().toISOString(),
            CompanyId: companyId,
            CompanyName: e.target.elements.company_name.value,
            FacebookShare: e.target.elements.fb_share ? true : false,
            TwitterShare: e.target.elements.tw_share ? true : false,
            UserId: user.Id
        };

        fetch(process.env.REACT_APP_API_URL + 'complaints/save', {
            method: 'POST',
            //mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(complaint)
        }).then(res => {
            return res.json();
        }).then(data => {
            if (data.Success === true) {
                this.props.toggleForm();

                // Send new complaint to home page for live update
                complaint.Id = data.Id;
                this.props.sendNewComplaint(complaint);

                // upload files if any
                this.state.uploadFiles.length > 0 && this.uploadFiles(data.Id);
                
                this.setState({ post_btn: { text: 'Post Complaint', icon: 'fa-upload', disabled: '' }});
            }
        }).catch(err => {
            console.log(err);
        });
    }

    getSelectedFiles = (e) => {
        this.setState({ uploadFiles: e.target.files });
    }

    uploadFiles = (ComplaintId) => {
        let formData = new FormData();
        formData.append("ComplaintId", ComplaintId);
        let n = 1;    
        for (const file of this.state.uploadFiles) {  
            formData.append("files" + n, file);
            n++;
        }
        fetch(process.env.REACT_APP_API_URL + 'ComplaintFiles/uploadFiles', {
            method: 'POST',
            body: formData
        }).then(res => {
            if (res.ok === true) {
               console.log('Done')
            }
        }).catch(err => {
            console.log(err);
        });
    }

    onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
    };
    
    // Autosuggest will call this function every time you need to update suggestions.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: getSuggestions(value)
        });
    };

    onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
        companyId = suggestion.id;
    };
    
    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
    };

    render() {
        fetchCompanies();
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
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
                        <UserInfo user={User.getUserData()} />

                        <div className="posttext col-md-10">
                            <Autosuggest
                                suggestions={suggestions}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                onSuggestionSelected={this.onSuggestionSelected}
                                getSuggestionValue={getSuggestionValue}
                                renderSuggestion={renderSuggestion}
                                inputProps={inputProps}
                            />
                    
                            <div><input type="text" name="title" placeholder="Brief caption for your displeasure..." className="form-control" /></div>
                    
                            <div><textarea name="complaint" id="desc" placeholder="Full description of what happened"  className="form-control"></textarea></div>

                            <div>
                                <label>Include Evidence (Screenshots, receipts etc)</label>
                                <input type="file" name="files" onChange={this.getSelectedFiles} accept="image/*|audio/*|video/*" multiple />
                            </div>
                            <br></br>
                            <input type="hidden" name="companyId" value="1" />
                            <div className="row newtopcheckbox">
                                <div className="col-lg-6 col-md-6">
                                    <div>
                                        <p>Share on Social Networks</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" name="fb_share" id="fb"/> <i className="fab fa-facebook-square"></i>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" name="tw_share" id="tw" /> <i className="fab fa-twitter"></i>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="postinfobot">
                
                        <div className="notechbox pull-left">
                            <input type="checkbox" name="notify" className="form-control" />
                        </div>
                
                        <div className="pull-left">
                            <label> Email me when some one post a reply</label>
                        </div>

                        <div className="pull-right postreply">
                            <div className="pull-left smile"><a href=""><i className="fa fa-smile-o"></i></a></div>
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
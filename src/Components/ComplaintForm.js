import React, { Component } from "react";
import Autosuggest from 'react-autosuggest';

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
        this.state = { value: '', suggestions: [] };
    }

    submitComplaint = (e) => {
        e.preventDefault();

        const complaint = {
            Title: e.target.elements.title.value,
            Issue: e.target.elements.complaint.value,
            IssueDate: new Date().toISOString(),
            CompanyId: companyId,
            CompanyName: e.target.elements.company_name.value,
            UserId: 1
        };

        fetch(process.env.REACT_APP_API_URL + 'complaints/save', {
            method: 'POST',
            //mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(complaint)
        }).then(res => {
            if (res.ok === true) {
                this.props.toggleForm();

                // update page with the post
                //this.props.newPostData(complaint);
            }
        }).catch(err => {
            console.log(err);
        });
        //this.props.newPostData(complaint);
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
                        <UserInfo />

                        <div className="posttext pull-left">
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
                    
                            <div><textarea name="complaint" id="desc" placeholder="Full description of what happened"  className="form-control" ></textarea></div>
                            <input type="hidden" name="companyId" value="1" />
                            <div className="row newtopcheckbox">
                                <div className="col-lg-6 col-md-6">
                                    <div>
                                        <p>Share on Social Networks</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" id="fb"/> <i className="fa fa-facebook-square"></i>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" id="tw" /> <i className="fa fa-twitter"></i>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" id="gp" /> <i className="fa fa-google-plus-square"></i>
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
                            <div className="pull-left"><button type="submit" className="btn btn-primary">Post</button></div>
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
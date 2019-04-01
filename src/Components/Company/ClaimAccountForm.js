import React, { Component } from "react";
import CompanyAutosuggest from "../CompanyAutosuggest";

class ClaimAccount extends Component {
    state = { company_value: '', company_id: 0, post_btn: { text: 'Send Message', icon: 'fa-send', disabled: '' }, alert: { msg: '', alert_type: '', status: 'hidden' } };

    postRequest = async e => {
        e.preventDefault();

        // if (this.state.company_id == 0) {
        //     this.setState({
        //         alert: {
        //             msg: "It doesn't seem like there's any complaint against this company yet. If you want to sign up regardless, contact Us",
        //             alert_type: 'danger',
        //             status: ''
        //         }
        //     });
        //     return false;
        // }

        const request = {
            CompanyName: e.target.elements.company_name.value,
            ContactPerson: e.target.elements.name.value,
            ContactEmail: e.target.elements.email.value,
            ContactPhone: e.target.elements.phone.value,
            CompanyId: this.state.company_id
        };

        try {
            const res = await fetch(process.env.REACT_APP_API_URL + 'companyRequests', {
                method: 'POST',
                body: JSON.stringify(request),
                headers: {
                    'Content-Type': 'application/json'
                } 
            });
            const json = await res.json();
            if (json.Success === true) {
                this.setState({ 
                    alert: {
                        msg: 'Your request has been sent successfully. We will contact you within seven working days to verify your identity.',
                        alert_type: 'success',
                        status: ''
                    }
                });
            }
        } catch(err) {
            this.setState({
                alert: {
                    msg: "Something went wrong. Please try again later or <a href='/company/contact'>contact us</a>.",
                    alert_type: 'danger',
                    status: ''
                }
            });
            console.log(err);
        }
    }

    onChange = (event, { newValue }) => {
        this.setState({
            company_value: newValue
        });
    };

    updateCompanyId = id => {
        this.setState({ company_id: id });
    }

    render() {
        const value = this.state.company_value;

        const inputProps = {
            name: 'company_name',
            placeholder: 'Start typing the name of Organisation...',
            value,
            className: 'form-control',
            onChange: this.onChange,
            required: 'required'
        };

        return(
            <div>
                <form className="form newtopic" method="post" onSubmit={this.postRequest}>
                    <div className="topwrap">
                        <div className="posttext">
                            {/* <div><input type="text" name="company_name" placeholder="ame of your organisation..." className="form-control input-lg" required /></div> */}
                            <CompanyAutosuggest inputProps={inputProps} updateCompanyId={this.updateCompanyId} />

                            <div><input type="text" name="name" placeholder="Name of contact person..." className="form-control input-lg" required /></div>

                            <div className="row">
                                <div className="col-md-6"><input type="email" name="email" placeholder="Contact email..." className="form-control" required /></div>
                                <div className="col-md-6"><input type="text" name="phone" placeholder="Contact Phone..." className="form-control" required /></div>
                            </div>
                        </div>
                        <div className={'alert alert-' + this.state.alert.alert_type + ' ' + this.state.alert.status}>{this.state.alert.msg}</div>
                    </div>

                    <div className="pull-right"><button type="submit" className="btn btn-primary btn-lg" {...this.state.post_btn.disabled}><i className={"fa " + this.state.post_btn.icon}></i>&nbsp;&nbsp;{this.state.post_btn.text}</button></div>
                </form>
            </div>
        );
    }
}

export default ClaimAccount;
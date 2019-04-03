import React, { Component } from "react";
import Page from "./Page";
import bg from "../../../src/images/bg_.jpg";

const bg_style = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: '50% 0'
};

const content_style = {
    marginTop: '190px'
}

class SignIn extends Component {
    state = { post_btn: { text: 'Sign In', icon: 'fa-signin', disabled: '' }, alert: { msg: '', alert_type: '', status: 'hidden' } };
    
    signIn = e => {
        e.preventDefault();

        this.setState({ 
            alert: {
                msg: 'Incorrect email or password combination',
                alert_type: 'danger'
            }
        });
    }

    render() {
        return (
            <Page title="Sign In" bgStyle={bg_style} contentStyle={content_style}>
                <p>Sign in to manage your customers' complaints</p>
                <form className="form newtopic" method="post" onSubmit={this.signIn}>
                    <div className="topwrap">
                        <div className="posttext">
                            <div><input type="text" name="email" placeholder="Email" className="form-control input-lg" required /></div>

                            <div><input type="password" name="password" placeholder="Password" className="form-control input-lg" required /></div>
                        </div>
                        <div className={'alert alert-' + this.state.alert.alert_type + ' ' + this.state.alert.status}>{this.state.alert.msg}</div>
                    </div>

                    <div className="pull-right"><button type="submit" className="btn btn-primary btn-lg" {...this.state.post_btn.disabled}><i className={"fa " + this.state.post_btn.icon}></i>&nbsp;&nbsp;{this.state.post_btn.text}</button></div>
                </form>        
            </Page>
        );
    }
}

export default SignIn;
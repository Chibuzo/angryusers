import React, { Component } from "react";
import Page from "./Page"

class ContactPage extends Component {
    state = { post_btn: { text: 'Send Message', icon: 'fa-send', disabled: '' }, alert: { msg: 'kk', alert_type: '', status: 'hidden' } };

    componentDidMount() {
        document.title = 'AngryUsers - Contact Us';
    }

    sendEmail = (e) => {
        e.preventDefault();

        let email = {
            sender: e.target.elements.name.value,
            email: e.target.elements.email.value,
            subject: e.target.elements.subject.value,
            message: e.target.elements.message.value
        };

        fetch(process.env.REACT_APP_API_URL, {
            method: 'POST',
            body: JSON.stringify(email),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            this.setState({ alert: { msg: 'We have received your email. We will be in touch shortly', type: 'success', status: '' }});
        }).catch(err => {
            console.log(err)
            this.setState({ alert: { msg: 'something went wrong. Your email can not be sent at this time', alert_type: 'danger', status: '' } });
        });
    }

    render() {
        return (
            <Page>
                <div className="row">
                    <div className="col-md-8">
                        <h2>Contact Us</h2>
                        <p>Are you particularly angry about something? Feel free to contact us anyways</p><br />

                        <form className="form newtopic" method="post" onSubmit={this.sendEmail}>
                            <div className="topwrap">
                                <div className="posttext">
                                    <div><input type="text" name="name" placeholder="Your name..." className="form-control" required /></div>

                                    <div><input type="email" name="email" placeholder="Your email address..." className="form-control" required /></div>

                                    <div><input type="text" name="subject" placeholder="Subject..." className="form-control" required /></div>

                                    <div><textarea name="message" id="desc" placeholder="Message..." className="form-control" required></textarea></div>
                                </div>
                                <div className={'alert alert-' + this.state.alert.alert_type + ' ' + this.state.alert.status}>{this.state.alert.msg}</div>
                            </div>

                            <div className="pull-left"><button type="submit" className="btn btn-primary" {...this.state.post_btn.disabled}><i className={"fa " + this.state.post_btn.icon}></i>&nbsp;&nbsp;{this.state.post_btn.text}</button></div>
                        </form>
                    </div>

                    <div className="col-md-3 text-center pull-right" style={{ fontStyle: 'italic', fontWeight: '100', fontSize: '16px' }}>
                        
                    </div>
                </div>
            </Page>
        );
    }
}

export default ContactPage;    
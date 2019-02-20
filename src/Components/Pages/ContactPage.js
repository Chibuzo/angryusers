import React, { Component } from "react";
import Page from "./Page"

class ContactPage extends Component {
    state = { post_btn: { text: 'Send Message', icon: 'fa-send', disabled: '' }};

    componentDidMount() {
        document.title = 'AngryUsers - Contact Us';
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
                                    <div><input type="text" name="email" placeholder="Your email address..." className="form-control" /></div>

                                    <div><input type="text" name="Subject" placeholder="Subject..." className="form-control" /></div>

                                    <div><textarea name="message" id="desc" placeholder="Message..." className="form-control"></textarea></div>
                                </div>
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
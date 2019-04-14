import React, { Component } from "react";

class ContactFrom extends Component {
    state = { post_btn: { text: 'Send Message', icon: 'fa-paper-plane', disabled: '' }, alert: { msg: '', alert_type: '', status: 'hidden' } };
    
    sendMessage = async e => {
        e.preventDefault();

        this.setState({ post_btn: { text: 'Sending...', icon: 'fa-redo fa-spin', disabled: 'disabled' } });

        const form = e.target.elements;
        const message = {
            company_name: form.company_name.value,
            contact_person: form.contact_person.value,
            email: form.email.value,
            phone: form.phone.value,
            subject: form.subject.value,
            message: form.message.value
        };

        try {
            const res = await fetch(process.env.REACT_APP_API_URL + 'CompanyRequests/sendMessage', {
                method: 'POST',
                body: JSON.stringify(message),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const json = await res.json();
            if (json.Success === true) {
                this.setState({
                    alert: {
                        msg: 'We have received your message. We will contact you as soon as possible.',
                        alert_type: 'success',
                        status: ''
                    }
                });
            }
        } catch(err) {
            this.setState({
                alert: {
                    msg: 'Error: Something went wrong. Make sure you are connected to the internet. Please try again.',
                    alert_type: 'danger',
                    status: ''
                }
            });
            console.log(err);
        } finally {
            this.setState({ post_btn: { text: 'Send Message', icon: 'fa-paper-plane', disabled: '' } });
        }
    }

    render() {
        return(
            <form className="form newtopic" method="post" onSubmit={this.sendMessage}>
                <div className="topwrap">
                    <div className="posttext">
                        <div><input type="text" name="company_name" placeholder="Name of your organisation..." className="form-control input-lg" required /></div>

                        <div><input type="text" name="contact_person" placeholder="Name of contact person..." className="form-control input-lg" required /></div>

                        <div className="row">
                            <div className="col-md-6 col-xs-12"><input type="email" name="email" placeholder="Contact email..." className="form-control" required /></div>
                            <div className="col-md-6 col-xs-12"><input type="text" name="phone" placeholder="Contact Phone..." className="form-control" required /></div>
                        </div>

                        <div><input type="text" name="subject" placeholder="Subject..." className="form-control" required /></div>

                        <div><textarea name="message" id="desc" placeholder="Message..." className="form-control" rows="7" required></textarea></div>
                    </div>
                    <div className={'alert alert-' + this.state.alert.alert_type + ' ' + this.state.alert.status}>{this.state.alert.msg}</div>
                </div>

                <div className="pull-right"><button type="submit" className="btn btn-default btn-lg" {...this.state.post_btn.disabled}><i className={"fa " + this.state.post_btn.icon}></i>&nbsp;&nbsp;{this.state.post_btn.text}</button></div>
            </form>
        );
    }
}

export default ContactFrom;
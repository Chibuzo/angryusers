import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login'
import Modal from 'react-awesome-modal';

import User from "../Helpers/User";

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = { modal_toggle: true, User: null };
    }

    responseFacebook = (res) => {
        let user = {
            Fullname: res.name,
            Email: res.email,
            Photo_url: res.picture.data.url
        };
        fetch(process.env.REACT_APP_API_URL + 'Users/FindOrCreate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => {
            res.json();
        }).then(valid_user => {
            if (valid_user.Success === true) {
                user.id = valid_user.Id;
                User.saveUser(user);
            }
        }).catch(err => {
            console.log(err);
        });
    }

    openModal = () => {
        this.setState({
            modal_toggle: true
        });
    }

    closeModal() {
        this.setState({
            modal_toggle: false
        });
    }

    render() {
        return(
            <Modal 
                toggleModal={this.toggleModal}
                visible={this.state.modal_toggle}
                width="400"
                height="350"
                effect="fadeInUp"
                onClickAway={() => this.closeModal()}
            >
                <div className="Modal">
                    <h3>Login to Continue</h3>
                    <br></br>
                    <FacebookLogin
                        appId={process.env.REACT_APP_FB_APP_ID}
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={this.responseFacebook} />
                </div>
            </Modal>
        )
    }
}

export default LoginModal;
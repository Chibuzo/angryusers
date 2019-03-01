import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login';

import Modal from 'react-awesome-modal';

import User from "../Helpers/User";
    
class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = { modal_toggle: false };
    };

    // login user
    responseFacebook = (res) => {
        let user = {
            Fullname: res.name,
            Email: res.email,
            Photo_url: res.picture.data.is_silhouette ? '' : res.picture.data.url
        };
        this.loginUser(user, this);
    }

    responseGoogle = (res) => {
        let result = res.profileObj;
        if (result) {
            let user = {
                Fullname: result.name,
                Email: result.email,
                Photo_url: result.imageUrl
            }
            this.loginUser(user, this);
        }
    }

    loginUser = (user, $this) => {
        fetch(process.env.REACT_APP_API_URL + 'Users/FindOrCreate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => {
            return res.json();
        }).then(valid_user => {
            if (valid_user.Success === true) {
                user.Id = valid_user.Id;
                let newUser = new User(user);
                newUser.saveUser(user);
                this.props.triggerLoginAction(true);
                $this.closeModal();
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
        this.props.onClose(false)
    }

    render() {
        return(
            <Modal 
                toggleModal={this.toggleModal}
                visible={this.props.controlModal}
                width="400"
                height="350"
                effect="fadeInUp"
                onClickAway={() => this.closeModal()}
            >
                <div className="Modal">
                    <h3>Login to Continue</h3>
                    <hr /><br />
                    <FacebookLogin
                        appId={process.env.REACT_APP_FB_APP_ID}
                        size='small'
                        icon={<i className='fab fa-facebook'></i>}
                        fields="name,email,picture"
                        callback={this.responseFacebook} />
                    <br /><br />
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Login With Google"
                        icon="true"
                        className='google-login-btn'
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                    />    
                </div>
            </Modal>
        )
    }
}

export default LoginModal;
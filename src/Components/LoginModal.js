import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login';

import Modal from 'react-awesome-modal';

import User from "../Helpers/User";
    
class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = { modal_toggle: false, login_msg: 'hidden' };
    };

    // login user
    responseFacebook = (res) => {
        let user = {
            Fullname: res.name,
            Email: res.email,
            Photo_url: res.picture.data.is_silhouette ? '' : `https://graph.facebook.com/${res.id}/picture`
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

    loginUser = (user) => {
        this.setState({ login_msg: '' });
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
                this.closeModal();
                this.setState({ login_msg: 'hidden' });
                this.props.triggerLoginAction(true);
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
                    <br /><br />
                    <div className={this.state.login_msg + " alert alert-info"}><em>Logging in, please wait...</em></div>
                </div>
            </Modal>
        );
    }
}

export default LoginModal;
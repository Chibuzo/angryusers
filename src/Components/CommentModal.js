import React, { Component } from "react";
import Modal from 'react-awesome-modal';
import User from "../Helpers/User";

class CommentModal extends Component {
    state = { modal_toggle: false };

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
        const modal_visibility = this.state.modal_toggle;

        return(
            <Modal
                visible={modal_visibility}
                width="400"
                height="350"
                effect="fadeInUp"
                onClickAway={() => this.closeModal()}
            >
                <div className="Modal">

                </div>
            </Modal>
        );
    }
}
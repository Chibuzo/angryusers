import React, { Component } from "react";
import Modal from "react-awesome-modal";

class FlagPost extends Component {
    state = { modal_visibility: false, alert: { msg: '', alert_type: '', status: 'hidden' } };

    postReport = e => {
        e.preventDefault();

        const props = this.props;
        const flag = {
            PostTitle: props.postTitle,
            PostId: props.postId,
            PostType: props.postType,
            UserId: props.userId,
            Comment: e.target.elements.comment.value
        };

        try {
            fetch(process.env.REACT_APP_API_URL + 'ComplaintFlags', {
                method: 'POST',
                body: JSON.stringify(flag),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } finally {
            this.setState({ alert: { msg: 'Thank you! The complaint has been reported for moderation.', type: 'success', status: '' } });;
        }
    }

    componentDidUpdate = () => {
        if (this.props.visible === true && this.state.modal_visibility === false) {
            this.setState({ modal_visibility: true });
        }
    }

    closeModal() {
        this.props.hideVisibilty();
        this.setState({ modal_visibility: false });
    }

    render() {
        const modal_state = this.state.modal_visibility;
        const alert = this.state.alert;

        return (
            <Modal
                visible={modal_state}
                width="440"
                height="400"
                effect="fadeInUp"
                onClickAway={() => this.closeModal()}   
            >
                <div className="Modal">
                    <h3>Report Post for Moderation</h3>
                    <span style={{ position: 'relative', top: '-31px', right: '17px', color: '#000' }} className="pull-right"><a href="#" onClick={() => this.closeModal()}>X</a></span>
                    <hr />
                    <p>Go ahead if you think this {this.props.postType} is inappropiate.</p>
                    <form onSubmit={this.postReport}>
                        <div className="posttext col-md-12">
                            <div className="textwraper"><div className="colmd-12"><textarea name="comment" placeholder="Why do you want to report this?..." className="form-control"></textarea></div></div>
                            <br />
                            <div className={'alert alert-' + alert.type + ' ' + alert.status}>{alert.msg}</div>
                            <div><input type="submit" value="Report Post" className="btn btn-primary pull-right" /></div>
                        </div>    
                    </form>
                </div>
            </Modal>
        );
    }
}

export default FlagPost;
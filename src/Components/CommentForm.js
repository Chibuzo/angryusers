import React, {Component} from "react"

import User from "../Helpers/User";

class CommentForm extends Component {
    state = { comment_btn: { text: 'Post Comment', icon: 'fa-upload', disabled: '' }};

    postComment = (e) => {
        e.preventDefault();

        // fetch user details
        let user;
        if (Object.keys(User.getUserData()).length > 0) {
            user = User.getUserData();
        } else {
            this.props.showLoginOpts(true);
            return;
        }

        // let usr = {
        //     Id: 1,
        //     Fullname: 'Chibuzo',
        //     email: 'uzo.systems@gmail.com',
        // };
        // var u = new User(usr);
        // u.saveUser(usr);
        // let user = User.getUserData();

        this.setState({ comment_btn: { text: 'Posting...', icon: 'fa-redo fa-spin', disabled: 'disabled' }});

        let comment = {
            ComplaintId: e.target.elements.complaint_id.value,
            Body: e.target.elements.comment.value,
            Notify: e.target.elements.notify.checked ? true : false,
            DatePosted: new Date().toISOString(),
            userId: user.Id
        };
        fetch(process.env.REACT_APP_API_URL + 'comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        }).then(res => {
            if (res.ok === true) {
                this.props.sendNewComment(comment);
            }
        }).catch(err => {
            console.log(err);
        });
        e.target.reset();
        this.setState({ comment_btn: { text: 'Post Comment', icon: 'fa-upload', disabled: '' } });
    }

    render() {
        return(
            <form className="form" method="post" onSubmit={this.postComment}>
                <div className="row">
                    <div className="posttext col-md-12 col-sm-12 col-xs-12">
                        <div className="textwraper">
                            <div className="postreply">Post a Comment</div>
                            <textarea name="comment" placeholder="Type your comment here" required></textarea>
                            <input type="hidden" name="complaint_id" value={this.props.postId} />
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="postinfobot">
                    <div className="col-md-8">
                        <div className="notechbox pull-left">
                            <input type="checkbox" name="notify" className="form-control" />
                        </div>
                
                        <div className="">
                            <label> Email me when some one post a reply</label>
                        </div>
                    </div>    
            
                    <div className="col-md-4 text-right">
                        <button type="submit" className="btn btn-primary" {...this.state.comment_btn.disabled}><i className={"fa " + this.state.comment_btn.icon}></i>&nbsp;&nbsp;{this.state.comment_btn.text}</button>
                    </div>

                    <div className="clearfix"></div>
                </div>
            </form>
        );
    }
}

export default CommentForm;
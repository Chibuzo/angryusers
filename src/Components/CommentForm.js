import React, {Component} from "react"

import UserInfo from "./UserInfoThumb";

class CommentForm extends Component {

    postComment = (e) => {
        e.preventDefault();

        let comment = {
            ComplaintId: e.target.elements.complaint_id.value,
            Body: e.target.elements.comment.value,
            DatePosted: new Date().toISOString(),
            userId: 1
        };
        fetch(process.env.REACT_APP_API_URL + 'comments', {
            method: 'POST',
            //mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        }).then(res => {
            if (res.ok === true) {
            }
        }).catch(err => {
            console.log(err);
        });
        e.target.reset();
    }

    render() {
        return(
            <div className="post">
                <form className="form" method="post" onSubmit={this.postComment}>
                    <div className="topwrap">
                        <UserInfo />

                        <div className="posttext pull-left">
                            <div className="textwraper">
                                <div className="postreply">Post a Comment</div>
                                <textarea name="comment" placeholder="Type your comment here"></textarea>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="postinfobot">
                        <input type="hidden" name="complaint_id" value={this.props.complaintId} />
                        <div className="notechbox pull-left">
                            <input type="checkbox" name="notify" className="form-control" />
                        </div>
                
                        <div className="pull-left">
                            <label> Email me when some one post a reply</label>
                        </div>
                
                        <div className="pull-right postreply">
                            <div className="pull-left smile"><a href=""><i className="fa fa-smile-o"></i></a></div>
                            <div className="pull-left"><button type="submit" className="btn btn-primary">Post Comment</button></div>
                            <div className="clearfix"></div>
                        </div>

                        <div className="clearfix"></div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CommentForm;
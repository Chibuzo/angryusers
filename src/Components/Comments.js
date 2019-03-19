import React from "react";
import CommentForm from "./CommentForm";

const Comments = (props) => {
    return(
        <div className="post">
            <div className="topwrap" style={{ paddingRight: '30px', paddingTop: '22px' }}>
                {props.children}
            </div>

            <hr />
            <CommentForm postId={props.complaintId} showLoginOpts={props.triggerLogin} sendNewComment={props.sendNewComment} />
        </div>    
    );
}

export default Comments;
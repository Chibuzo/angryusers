import React from "react";
import CommentForm from "./CommentForm";

const Comments = (props) => {
    return(
        <div className="comment-wrapper">
            <div className="topwrap">
                {props.children}
            </div>

            <hr />
            <CommentForm postId={props.complaintId} showLoginOpts={props.triggerLogin} sendNewComment={props.sendNewComment} />
        </div>    
    );
}

export default Comments;
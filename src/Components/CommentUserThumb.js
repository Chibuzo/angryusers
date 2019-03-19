import React from "react";

const CommentUserThumb = (props) => {
    return (
        <div>
            <div className="">
                <img src={props.user.Photo_url || 'https://s3.amazonaws.com/angryusers-images/angry.jpg'} alt={props.user.Fullname} title={props.user.Fullname} style={{ paddingRight: '10px' }} />
            </div>
        </div>
    );
}

export default CommentUserThumb;